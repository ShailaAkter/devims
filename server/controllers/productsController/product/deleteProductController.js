import productModel from "../../../models/productsModel/productModel.js";

export const deleteProductController = async(req, res) =>
{
    try
    {
        await productModel.findByIdAndDelete(req.params.productId).select("-image");
        res.status(200).send({
            success: true, 
            message: "Product deleted successfully!"
        })
    }
    catch(error)
    {
        console.log(`Delete product controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while deleting product!",
            error
        })
    }
}