import fs from 'fs';
import { checkCapital, checkEmail } from "../../../utils/authValidation.js";
import slugify from "slugify";
import customerModel from "../../../models/peopleModel/customerModel.js";


export const updateCustomerController = async(req, res) =>
{
    try
    {
        const {name, email, address, phone} = req.fields;
        const {image} = req.files || {};

        const customer = await customerModel.findById(req.params.customerId);
        if(!customer) 
        {
            return res.status(404).send({
                success: false,
                message: "Customer not found!"
            })
        }

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
        if(existingCustomer && existingCustomer._id.toString() !== req.params.customerId)
        {
            return res.status(200).send({
                success: false,
                message: "Customer  already exists with this email!"
            });
        }

        const updatedCustomer = await customerModel.findByIdAndUpdate(req.params.customerId,
            {
                ...req.fields,
                slug: slugify(fullname)
            },
            {new: true}
        )

        if(image)
        {
            updatedCustomer.image.data = fs.readFileSync(image.path);
            updatedCustomer.image.conentType = image.type;
        }

        await updatedCustomer.save();

        res.status(201).send({
            success: true,
            message: "Customer updated successfully!",
            updatedCustomer
        })


    }
    catch(error)
    {
        console.log(`Update customer controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while updating customer!"
        });
    }
}