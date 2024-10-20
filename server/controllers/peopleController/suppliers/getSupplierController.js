import supplierModel from "../../../models/peopleModels/supplierModel.js";

export const getSupplierController = async (req, res) =>
{
    try
    {
        const supplier = await supplierModel.findById(req.params.supplierId);

        res.status(200).send({
            success: true, 
            message: "Get supplier successfully!",
            supplier
        })
    }
    catch(error)
    {
        console.log(`Get customer image controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while getting customer image!",
            error
        })
    }
}