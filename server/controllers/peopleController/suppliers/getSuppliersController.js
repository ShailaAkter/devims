import supplierModel from "../../../models/peopleModel/supplierModel.js";

export const getSuppliersController = async(req, res) =>
{
    try
    {
        const suppliers = await supplierModel.find({}).sort({createdAt: -1});

        res.status(201).send({
            success: true, 
            countTotal: suppliers.length,
            message: "All suppliers list",
            suppliers
        })
    }
    catch(error)
    {
        console.log(`Get all suppliers controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while getting all suppliers!',
            error
        })
    }
}