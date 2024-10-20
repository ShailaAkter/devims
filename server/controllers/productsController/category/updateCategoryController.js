import categoryModel from "../../../models/productsModel/categoryModel.js";

export const updateCategoryController = async(req, res) =>
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

        const existingCategory = await categoryModel.findOne({categoryCode });
        
        if (existingCategory && existingCategory._id.toString() !== req.params.categoryId) 
        {
            return res.status(400).send({
                success: false,
                message: "Category already exists!"
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

        res.status(200).send({
            success: true,
            message: "Category updated successfully!",
            updatedCategory
        })
    }
    catch(error)
    {
        console.log(`Update category controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while updating category!',
            error
        })
    }
}