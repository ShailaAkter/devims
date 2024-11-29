import customerModel from "../../../models/peopleModel/customerModel.js";

export const getCustomerImageController = async(req, res) =>
{
    try
    {
        const customer = await customerModel.findById(req.params.customerId).select("image");
        if(customer.image.data)
        {
            res.set('Content-type', customer.image.conentType);
            return res.status(200).send(customer.image.data);
        }
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