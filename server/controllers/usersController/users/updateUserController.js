import userModel from "../../../models/usersModel/userModel.js";
import fs from 'fs';
import { checkCapital, checkEmail } from "../../../utils/authValidation.js";
import slugify from "slugify";


export const updateUserController = async(req, res) =>
{
    try
    {
        const {name, email, status, role} = req.fields;
        const {avatar} = req.files || {};

        const user = await userModel.findById(req.params.userId);
        if(!user) 
        {
            return res.status(404).send({
                success: false,
                message: "User not found!"
            })
        }

        if(!name)
        {
            return res.send({message: "Username is required!"})
        }

        const fullname = checkCapital(name.trim());

        if(fullname.length < 2 || fullname.length > 25)
        {
            return res.send({message: "Fullname must contain more than 2 character!"});
        }

    
        if(!email)
        {
            return res.send({message: "Email is required!"})
        }
        if(checkEmail(email) === false)
        {
            return res.send({message: "Please insert valid email!"});
        }

        if(!status)
        {
            return res.send({message: "Status is required!"});
        }

        if(!role)
        {
            return res.send({message: "Rolename is required!"});
        }

        if(!avatar)
        {
            return res.send({message: "Avatar is required!"});
        }

        const existingUser = await userModel.findOne({email});
        if(existingUser && existingUser._id.toString() !== req.params.userId)
        {
            return res.status(200).send({
                success: false,
                message: "User already exists!"
            });
        }

        const updatedUser = await userModel.findByIdAndUpdate(req.params.userId,
            {
                ...req.fields,
                slug: slugify(fullname)
            },
            {new: true}
        )

        if(avatar)
        {
            updatedUser.avatar.data = fs.readFileSync(avatar.path);
            updatedUser.avatar.conentType = avatar.type;
        }

        await updatedUser.save();

        res.status(201).send({
            success: true,
            message: "User updated successfully!",
            updatedUser
        })


    }
    catch(error)
    {
        console.log(`Update user controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while updating user!"
        });
    }
}