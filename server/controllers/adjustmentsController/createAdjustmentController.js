import adjustmentModel from "../../models/adjustmentsModel/adjustmentModel.js";

export const createAdjustmentController = async(req, res) =>
{
    try
    {
        const {date, warehouse, ref, totalProducts} = req.body;

        if(!date)
        {
            return res.send({message: "Date is required!"})
        }
        if(!warehouse)
        {
            return res.send({message: "Warehouse is required!"})
        }
        if(!ref)
        {
            return res.send({message: "Reference is required!"})
        }
        if(!totalProducts)
        {
            return res.send({message: "Total products is required!"})
        }

   

        const newAdjustment = await new adjustmentModel({
            date, 
            warehouse,
            ref,
            totalProducts
        }).save();

        res.status(201).send({
            success: true,
            message: "New Adjusment created!",
            newAdjustment
        })
    }
    catch(error)
    {
        console.log(`Create adjustment controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while creating new adjustment!',
            error
        })
    }
}