import warehouseModel from "../../../models/productsModel/warehouseModel.js";
import { checkEmail } from "../../../utils/authValidation.js";

export const createWarehouseController = async(req, res) =>
{
    try
    {
        const {name, email, phone, country, city, zipCode} = req.body;

        
        if(!name)
        {
            return res.send({message: "Name is required!"})
        }

        const slug = slugify(name, {
            lower: true, // Converts to lowercase
            strict: true // Removes special characters
        });

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
            return res.send({message: "Phone code is required!"})
        }

        if(!country)
        {
            return res.send({message: "Country code is required!"})
        }

        if(!city)
        {
            return res.send({message: "City code is required!"})
        }

        if(!zipCode)
        {
            return res.send({message: "Zip code is required!"})
        }

       
        const existingWarehouse = await warehouseModel.findOne({slug});
        if(existingWarehouse)
        {
            return res.status(200).send({
                success: false,
                message: "Warehouse already exists!"
            });
        }

        const newWarehouse = await new warehouseModel({
            name, 
            email,
            phone,
            country,
            city,
            zipCode,
            slug

        }).save();

        res.status(201).send({
            success: true,
            message: "New warehouse created!",
            newWarehouse
        })
    }
    catch(error)
    {
        console.log(`Create warehoiuse controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while creating new warehouse!',
            error
        })
    }
}