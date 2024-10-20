import customerModel from "../../../models/peopleModels/customerModel.js";

export const deleteCustomerController = async(req, res) =>
{
    try
    {
        await customerModel.findByIdAndDelete(req.params.customerId).select("-image");
        res.status(200).send({
            success: true, 
            message: "Customer deleted successfully!"
        })
    }
    catch(error)
    {
        console.log(`Delete customer controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: "Error occured while deleting customer!",
            error
        })
    }
}