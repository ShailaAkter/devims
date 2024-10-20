import fs from 'fs';
import slugify from "slugify";
import brandModel from '../../../models/productsModel/brandModel.js';


export const updateBrandController = async(req, res) =>
{
    try
    {
        const {name, description} = req.fields;
        const {image} = req.files || {};

        const brand = await brandModel.findById(req.params.brandId);
        if(!brand) 
        {
            return res.status(404).send({
                success: false,
                message: "Brand not found!"
            })
        }

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

        const existingBrand = await brandModel.findOne({slug});
        if(existingBrand && existingBrand._id.toString() !== req.params.brandId)
        {
            return res.status(200).send({
                success: false,
                message: "Brand already exists with this name!"
            });
        }

        const updatedBrand = await brandModel.findByIdAndUpdate(req.params.brandId,
            {
                ...req.fields,
                slug: slugify(brandname)
            },
            {new: true}
        )

        if(image)
        {
            updatedBrand.image.data = fs.readFileSync(image.path);
            updatedBrand.image.conentType = image.type;
        }

        await updatedBrand.save();

        res.status(201).send({
            success: true,
            message: "Brand updated successfully!",
            updatedBrand
        })


    }
    catch(error)
    {
        console.log(`Update brand controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while updating brand!"
        });
    }
}