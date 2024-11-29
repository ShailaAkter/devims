import transferModel from "../../models/transfersModel/transferModel.js";

export const getTransfersController = async(req, res) =>
{
    try
    {
        const transfers = await transferModel.find({}).sort({createdAt: -1});

        res.status(201).send({
            success: true, 
            countTotal: transfers.length,
            message: "All transfers list",
            transfers
        })
    }
    catch(error)
    {
        console.log(`Get all transfers controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while getting all transfers!',
            error
        })
    }
}