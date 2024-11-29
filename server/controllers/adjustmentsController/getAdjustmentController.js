import adjustmentModel from "../../models/adjustmentsModel/adjustmentModel.js";

export const getAdjustmentController = async(req, res) =>
{
    try
    {
        const adjustment = await adjustmentModel.findById(req.params.adjustmentId);

        res.status(200).send({
            success: true, 
            message: "Get adjustment successfully!",
            adjustment
        })
    }
    catch(error)
    {
        console.log(`Get adjustment controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while getting adjustment!",
            error
        })
    }
}
