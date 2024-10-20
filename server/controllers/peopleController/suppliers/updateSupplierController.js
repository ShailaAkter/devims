import slugify from "slugify";
import supplierModel from "../../../models/peopleModels/supplierModel.js";
import { checkCapital, checkEmail } from "../../../utils/authValidation.js";


export const updateSupplierController = async(req, res) =>
{
    try
    {
        const {name, email, country, city, phone, address} = req.body;

        if(!name)
        {
            return res.send({message: "Supplier name is required!"})
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

        if(!country)
        {
            return res.send({message: "Country is required!"});
        }

        if(country.length < 2 || country.length > 25)
        {
            return res.send({message: "Country must contain more than 2 character!"});
        }

        if(!city)
        {
            return res.send({message: "City is required!"});
        }

        if(city.length < 2 || city.length > 25)
        {
            return res.send({message: "City must contain more than 2 character!"});
        }

        if(!address)
        {
            return res.send({message: "Address is required!"});
        }

        if(address.length < 2 || address.length > 25)
        {
            return res.send({message: "Address must contain more than 2 character!"});
        }

        
        if(!phone)
        {
            return res.send({message: "Phone is required!"});
        }
    
        
        const existingSupplier = await supplierModel.findOne({ email });
        
        if (existingSupplier && existingSupplier._id.toString() !== req.params.supplierId) 
        {
            return res.status(400).send({
                success: false,
                message: "Supplier already exists with this email!"
            });
        }

        const updatedSupplier = await supplierModel.findByIdAndUpdate(
            req.params.supplierId,
            {
                name: fullname,
                slug: slugify(fullname),
                email,
                country,
                city,
                phone,
                address
            },
            { new: true } 
        );

        res.status(200).send({
            success: true,
            message: "Supplier updated successfully!",
            updatedSupplier
        })
    }
    catch(error)
    {
        console.log(`Update supplier controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while updating supplier!',
            error
        })
    }
}