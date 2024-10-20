import supplierModel from "../../../models/peopleModels/supplierModel.js";

export const deleteSupplierController = async(req, res) =>
{
    try
    {
        await supplierModel.findByIdAndDelete(req.params.supplierId);
        res.status(200).send({
            success: true, 
            message: "Supplier deleted successfully!"
        })
    }
    catch(error)
    {
        console.log(`Delete supplier controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while deleting supplier!",
            error
        })
    }
}