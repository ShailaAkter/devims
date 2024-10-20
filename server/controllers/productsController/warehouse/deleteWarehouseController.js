import warehouseModel from "../../../models/productsModel/warehouseModel.js";

export const deleteWarehouseController = async(req, res) =>
{
    try
    {
        await warehouseModel.findByIdAndDelete(req.params.warehouseId);
        res.status(200).send({
            success: true, 
            message: "Warehouse deleted successfully!"
        })
    }
    catch(error)
    {
        console.log(`Delete category controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while deleting warehouse!",
            error
        })
    }
}