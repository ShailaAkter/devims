import warehouseModel from "../../../models/productsModel/warehouseModel.js";

export const getWarehousesController = async(req, res) =>
{
    try
    {
        const warehouses = await warehouseModel.find({}).sort({createdAt: -1});

        res.status(201).send({
            success: true, 
            countTotal: warehouses.length,
            message: "All warehouses list",
            warehouses
        })
    }
    catch(error)
    {
        console.log(`Get all warehouses controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while getting all warehouses!',
            error
        })
    }
}