import categoryModel from "../../../models/productsModel/categoryModel.js";

export const getCategoriesController = async(req, res) =>
{
    try
    {
        const categories = await categoryModel.find({}).sort({createdAt: -1});

        res.status(201).send({
            success: true, 
            countTotal: categories.length,
            message: "All suppliers list",
            suppliers
        })
    }
    catch(error)
    {
        console.log(`Get all categories controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while getting all categories!',
            error
        })
    }
}