export const updateUnitController = async (req, res) =>
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
        if(existingUnit && existingUnit._id.toString() !== req.params.unitId)
        {
            return res.status(200).send({
                success: false,
                message: "Unit already exists!"
            });
        }

        const updatedCategory = await categoryModel.findByIdAndUpdate(
            req.params.categoryId,
            {
                categoryCode,
                categoryName
            },
            { new: true } 
        );

        const updatedUnit = await unitModel.findByIdAndUpdate(
            {
                title,
                shortName,
                baseUnit,
                operator,
                operationValue,
                slug
            },
            { new: true}
        )

        res.status(200).send({
            success: true,
            message: "Unit updated successfully!",
            updatedUnit
        })
    }
    catch(error)
    {
        console.log(`Update unit controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while updating unit!',
            error
        })
    }
}