import productModel from "../../../models/productsModel/productModel.js";

export const getProductsController = async(req, res) =>
{
    try
    {
        const products = await productModel.find({})
        .select("-image")
        .populate("category")
        .populate("brand")
        .populate("unitProduct")
        .sort({createdAt: -1});

        
        res.status(201).send({
            success: true, 
            countTotal: products.length,
            message: "All products list",
            users
        })
    }
    catch(error)
    {
        console.log(`Get all products controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while getting all products!',
            error
        })
    }
}