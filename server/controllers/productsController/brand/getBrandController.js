import brandModel from "../../../models/productsModel/brandModel.js";

export const getBrandController = async(req, res) =>
{
    try
    {
        const brand = await brandModel.findById(req.params.brandId).select("-image");

        if (!brand) 
        {
            return res.status(404).send({
                success: false,
                message: "Brand not found!"
            });
        }

        res.status(200).send({
            success: true,
            message: "Single brand fetched!",
            brand
        })
    }
    catch(error)
    {
        console.log(`Get brand controller error = ${error}`);

        res.status(500).send({
            success: true, 
            message: "Error occured while getting single brand!",
            error
        })
    }
}