import transferModel from "../../models/transfersModel/transferModel.js";

export const getTransferController = async(req, res) =>
{
    try
    {
        const transfer = await transferModel.findById(req.params.transferId);

        res.status(200).send({
            success: true, 
            message: "Get transfer successfully!",
            transfer
        })
    }
    catch(error)
    {
        console.log(`Get transfer controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while getting transfer!",
            error
        })
    }
}
