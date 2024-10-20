import customerModel from "../../../models/peopleModels/customerModel.js";

export const getCustomerController = async(req, res) =>
{
    try
    {
        const customer = await customerModel.findById(req.params.customerId).select("-photo");

        if (!customer) 
        {
            return res.status(404).send({
                success: false,
                message: "Customer not found!"
            });
        }

        res.status(200).send({
            success: true,
            message: "Single Customer fetched!",
            customer
        })
    }
    catch(error)
    {
        console.log(`Get customer controller error = ${error}`);

        res.status(500).send({
            success: true, 
            message: "Error occured while getting single customer!",
            error
        })
    }
}