export const getCategoryController = async(req, res) =>
{
    try
    {
        const category = await categoryModel.findById(req.params.categoryId);

        res.status(200).send({
            success: true, 
            message: "Get category successfully!",
            category
        })
    }
    catch(error)
    {
        console.log(`Get category controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while getting category!",
            error
        })
    }
}
