import adjustmentModel from "../../models/adjustmentsModel/adjustmentModel.js";

export const deleteAdjustmentController = async(req, res) =>
{
    try
    {
        await adjustmentModel.findByIdAndDelete(req.params.adjustmentId);
        res.status(200).send({
            success: true, 
            message: "Adjustment deleted successfully!"
        })
    }
    catch(error)
    {
        console.log(`Delete adjustment controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while deleting adjustment!",
            error
        })
    }
}