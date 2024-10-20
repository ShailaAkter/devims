import unitModel from "../../../models/productsModel/unitModel.js";

export const getUnitController = async (req, res) =>
{
    try
    {
        const unit = await unitModel.findById(req.params.unitId);

        res.status(200).send({
            success: true, 
            message: "Get unit successfully!",
            unit
        })
    }
    catch(error)
    {
        console.log(`get unit controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while getting unit!",
            error
        })
    }
}
