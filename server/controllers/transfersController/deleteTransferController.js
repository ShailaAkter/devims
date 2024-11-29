import transferModel from "../../models/transfersModel/transferModel.js";

export const deleteTransferController = async(req, res) =>
{
    try
    {
        await transferModel.findByIdAndDelete(req.params.transferId);
        res.status(200).send({
            success: true, 
            message: "Transfer deleted successfully!"
        })
    }
    catch(error)
    {
        console.log(`Delete transfer controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while deleting transfer!",
            error
        })
    }
}