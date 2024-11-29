import supplierModel from "../../../models/peopleModel/supplierModel.js";
import { checkCapital, checkEmail } from "../../../utils/authValidation.js";

export const createSupplierController = async (req,res) =>
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
    
        const existingSupplier = await supplierModel.findOne({email});
        if(existingSupplier)
        {
            return res.status(200).send({
                success: false,
                message: "Supplier already exists!"
            });
        }

        const newSupplier = await new supplierModel({name:fullname, email, country, city, phone, address}).save();

        res.status(201).send({
            success: true,
            message: "New supplier created!",
            newSupplier
        })
    }
    catch(error)
    {
        console.log(`Create supplier controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while creating new supplier!',
            error
        })
    }
}