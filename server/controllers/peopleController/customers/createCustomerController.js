import slugify from "slugify";
import { checkCapital, checkEmail } from "../../../utils/authValidation.js";
import fs from 'fs';
import customerModel from "../../../models/peopleModel/customerModel.js";


export const createCustomerController = async (req, res) =>
{
    try
    {
        const {name, email, address, phone} = req.fields;
        const {image} = req.files || {};

        if(!name)
        {
            return res.send({message: "Customer name is required!"})
        }

        const fullname = checkCapital(name.trim());

        if(fullname.length < 2 || fullname.length > 25)
        {
            return res.send({message: "Name must contain more than 2 character!"});
        }

        if(!email)
        {
            return res.send({message: "Email is required!"})
        }
        if(checkEmail(email) === false)
        {
            return res.send({message: "Please insert valid email!"});
        }

        if(!phone)
        {
            return res.send({message: "Phone is required!"});
        }

        if(!address)
        {
            return res.send({message: "Address is required!"});
        }

        if(address.length < 2 || address.length > 25)
        {
            return res.send({message: "Address must contain more than 2 character!"});
        }

        if(!image)
        {
            return res.send({message: "Customer image is required!"});
        }

        const existingCustomer = await customerModel.findOne({email});
        if(existingCustomer)
        {
            return res.status(200).send({
                success: false,
                message: "Customer already exists!"
            });
        }

        const newCustomer = new customerModel({
            ...req.fields, 
            slug: slugify(fullname)
        });

        if(image)
        {
            newCustomer.image.data = fs.readFileSync(image.path);
            newCustomer.image.conentType = image.type;
        }

        await newCustomer.save();

        res.status(201).send({
            success: true,
            message: "User created successfully!",
            newCustomer
        })
    }
    catch(error)
    {
        console.log(`Create customer controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while creating new customer!',
            error
        })
    }
}