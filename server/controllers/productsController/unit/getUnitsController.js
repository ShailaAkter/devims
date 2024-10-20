import unitModel from "../../../models/productsModel/unitModel.js";

export const getUnitsController = async (req, res) =>
{
    try
    {
        const units = await unitModel.find({}).sort({createdAt: -1});

        res.status(201).send({
            success: true, 
            countTotal: units.length,
            message: "All units list",
            suppliers
        })
    }
    catch(error)
    {
        console.log(`get all units controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while getting all units!',
            error
        })
    }
}