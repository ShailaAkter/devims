import brandModel from "../../../models/productsModel/brandModel.js";

export const deleteBrandController = async(req, res) =>
{
    try
    {
        await brandModel.findByIdAndDelete(req.params.brandId).select("-image");
        res.status(200).send({
            success: true, 
            message: "Brand deleted successfully!"
        })
    }
    catch(error)
    {
        console.log(`Delete brand controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while deleting brand!",
            error
        })
    }
}