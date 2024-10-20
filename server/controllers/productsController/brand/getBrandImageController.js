import brandModel from "../../../models/productsModel/brandModel.js";

export const getBrandImageController = async(req, res) =>
{
    try
    {
        const brand = await brandModel.findById(req.params.brandId).select("image");
        if(brand.image.data)
        {
            res.set('Content-type', brand.image.conentType);
            return res.status(200).send(brand.image.data);
        }
    }
    catch(error)
    {
        console.log(`Get brand image controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while getting brand image!",
            error
        })
    }
}