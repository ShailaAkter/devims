import productModel from "../../../models/productsModel/productModel.js";
import userModel from "../../../models/usersModel/userModel.js";

export const getProductController = async(req, res) =>
{
    try
    {
        const product = await productModel.findById(req.params.productId)
        .select("-image")
        .populate("category")
        .populate("brand")
        .populate("unitProduct");

        if (!product) 
        {
            return res.status(404).send({
                success: false,
                message: "product not found!"
            });
        }

        res.status(200).send({
            success: true,
            message: "Single product fetched!",
            user
        })
    }
    catch(error)
    {
        console.log(`Get product controller error = ${error}`);

        res.status(500).send({
            success: true, 
            message: "Error occured while getting single product!",
            error
        })
    }
}