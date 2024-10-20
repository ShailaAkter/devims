import unitModel from "../../../models/productsModel/unitModel.js";

export const deleteUnitController = async (req, res) =>
{
    try
    {
        await unitModel.findByIdAndDelete(req.params.unitId);
        res.status(200).send({
            success: true, 
            message: "Unit deleted successfully!"
        })
    }
    catch(error)
    {
        console.log(`Delete unit controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while deleting unit!",
            error
        })
    }
}