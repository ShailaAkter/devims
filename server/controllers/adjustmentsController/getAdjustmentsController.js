import adjustmentModel from "../../models/adjustmentsModel/adjustmentModel.js";

export const getAdjustmentsController = async(req, res) =>
{
    try
    {
        const adjustments = await adjustmentModel.find({}).sort({createdAt: -1});

        res.status(201).send({
            success: true, 
            countTotal: adjustments.length,
            message: "All Adjustments list",
            adjustments
        })
    }
    catch(error)
    {
        console.log(`Get all adjustments controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while getting all adjustments!',
            error
        })
    }
}