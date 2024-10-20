import slugify from "slugify";
import fs from 'fs';
import brandModel from "../../../models/productsModel/brandModel.js";


export const createBrandController = async (req, res) =>
{
    try
    {
        const {name, description} = req.fields;
        const {image} = req.files || {};

        if(!image)
        {
            return res.send({message: "Image is required!"});
        }

        if(!name)
        {
            return res.send({message: "Brand name is required!"})
        }

        const brandname = checkCapital(name.trim());

        if(brandname.length < 2 || brandname.length > 25)
        {
            return res.send({message: "Name must contain more than 2 character!"});
        }

        if(!description)
        {
            return res.send({message: "description is required!"})
        }



        const existingBrand = await customerModel.findOne({brandname});
        if(existingBrand)
        {
            return res.status(200).send({
                success: false,
                message: "Brand already exists!"
            });
        }

        const newBrand = new brandModel({
            ...req.fields, 
            slug: slugify(brandname)
        });

        if(image)
        {
            newBrand.image.data = fs.readFileSync(image.path);
            newBrand.image.conentType = image.type;
        }

        await newBrand.save();

        res.status(201).send({
            success: true,
            message: "New brand created successfully!",
            newBrand
        })
    }
    catch(error)
    {
        console.log(`Create brand controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while creating new brand!',
            error
        })
    }
}