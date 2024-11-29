import customerModel from "../../../models/peopleModel/customerModel.js";

export const getCustomersController = async(req, res) =>
{
    try
    {
        const customers = await customerModel.find({}).select("-image").sort({createdAt: -1});

        res.status(201).send({
            success: true, 
            countTotal: customers.length,
            message: "All customers list",
            customers
        })
    }
    catch(error)
    {
        console.log(`Get all customers controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while getting all customers!',
            error
        })
    }
}