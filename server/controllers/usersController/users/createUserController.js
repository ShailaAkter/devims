import slugify from "slugify";
import { checkCapital, checkEmail } from "../../../utils/authValidation.js";
import fs from 'fs';
import userModel from "../../../models/usersModel/userModel.js";


export const createUserController = async (req, res) =>
{
    try
    {
        const {name, email, status, role} = req.fields;
        const {avatar} = req.files || {};

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
        if(existingUser)
        {
            return res.status(200).send({
                success: false,
                message: "User already exists!"
            });
        }

        const newUser = new userModel({
            ...req.fields, 
            slug: slugify(fullname)
        });

        if(avatar)
        {
            newUser.avatar.data = fs.readFileSync(avatar.path);
            newUser.avatar.conentType = avatar.type;
        }

        await newUser.save();

        res.status(201).send({
            success: true,
            message: "User created successfully!",
            newUser
        })
    }
    catch(error)
    {
        console.log(`Create user controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while creating new user!',
            error
        })
    }
}