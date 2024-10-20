import brandModel from "../../../models/productsModel/brandModel.js";

export const getBrandsController = async(req, res) =>
{
    try
    {
        const brands = await brandModel.find({}).select("-image").sort({createdAt: -1});

        res.status(201).send({
            success: true, 
            countTotal: brands.length,
            message: "All brands list",
            brands
        })
    }
    catch(error)
    {
        console.log(`Get all brands controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while getting all brands!',
            error
        })
    }
}