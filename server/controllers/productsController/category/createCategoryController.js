import categoryModel from "../../../models/productsModel/categoryModel.js";

export const createCategoryController = async(req, res) =>
{
    try
    {
        const {categoryCode, categoryName} = req.body;

        if(!categoryCode)
        {
            return res.send({message: "Category code is required!"})
        }

        if(!categoryName)
        {
            return res.send({message: "Category name is required!"})
        }

       
        const existingCategory = await categoryModel.findOne({categoryCode});
        if(existingCategory)
        {
            return res.status(200).send({
                success: false,
                message: "Category already exists!"
            });
        }

        const newCategory = await new categoryModel({categoryCode, categoryName}).save();

        res.status(201).send({
            success: true,
            message: "New supplier created!",
            newCategory
        })
    }
    catch(error)
    {
        console.log(`Create category controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while creating new category!',
            error
        })
    }
}