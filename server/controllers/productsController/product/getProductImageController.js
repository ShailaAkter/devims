import productModel from "../../../models/productsModel/productModel.js";

export const getProductImageController = async(req, res) =>
{
    try
    {
        const product = await productModel.findById(req.params.productId).select("image");
        if(product.image.data)
        {
            res.set('Content-type', product.image.conentType);
            return res.status(200).send(product.image.data);
        }
    }
    catch(error)
    {
        console.log(`Get product image controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while getting product image!",
            error
        })
    }
}