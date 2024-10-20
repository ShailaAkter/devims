import warehouseModel from "../../../models/productsModel/warehouseModel.js";

export const getWarehouseController = async(req, res) =>
{
    try
    {
        const warehouse = await warehouseModel.findById(req.params.warehouseId);

        res.status(200).send({
            success: true, 
            message: "Get warehouse successfully!",
            warehouse
        })
    }
    catch(error)
    {
        console.log(`Get warehouse controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while getting warehouse!",
            error
        })
    }
}
