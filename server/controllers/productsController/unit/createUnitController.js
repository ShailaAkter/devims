import slugify from "slugify";
import unitModel from "../../../models/productsModel/unitModel.js";

export const createUnitController = async (req, res) =>
{
    try
    {
        const {title, shortName, baseUnit, operator, operationValue} = req.body;

        if(!title)
        {
            return res.send({message: "Title is required!"})
        }

        const slug = slugify(title, {
            lower: true, // Converts to lowercase
            strict: true // Removes special characters
          });
          

        if(!shortName)
        {
            return res.send({message: "Short name is required!"})
        }

        if(!baseUnit)
        {
            return res.send({message: "Base unit is required!"})
        }

        if(!operator)
        {
            return res.send({message: "Operator is required!"})
        }

        if(!operationValue)
        {
            return res.send({message: "Operation value is required!"})
        }

       
        const existingUnit = await unitModel.findOne({slug});
        if(existingUnit)
        {
            return res.status(200).send({
                success: false,
                message: "Unit already exists!"
            });
        }

        const newUnit = await new unitModel({
            title,
            shortName,
            baseUnit,
            operator,
            operationValue,
            slug
        }).save();

        res.status(201).send({
            success: true,
            message: "New supplier created!",
            newUnit
        })
    }
    catch(error)
    {
        console.log(`Create unit controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while creating new unit!',
            error
        })
    }
}