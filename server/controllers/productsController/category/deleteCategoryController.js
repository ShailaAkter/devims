import categoryModel from "../../../models/productsModel/categoryModel.js";

export const deleteCategoryController = async(req, res) =>
{
    try
    {
        await categoryModel.findByIdAndDelete(req.params.categoryId);
        res.status(200).send({
            success: true, 
            message: "Category deleted successfully!"
        })
    }
    catch(error)
    {
        console.log(`Delete category controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while deleting category!",
            error
        })
    }
}