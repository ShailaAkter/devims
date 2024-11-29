import adjustmentModel from "../../models/adjustmentsModel/adjustmentModel.js";

export const updateAdjustmentController = async(req, res) =>
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
            return res.send({message: "Refference is required!"})
        }
        if(!totalProducts)
        {
            return res.send({message: "Total products is required!"})
        }

        const updatedAdjustment = await adjustmentModel.findByIdAndUpdate(
            req.params.adjusmentId,
            {
                date, 
                warehouse,
                ref,
                totalProducts
            },
            { new: true } 
        );

        res.status(200).send({
            success: true,
            message: "Adjustment updated successfully!",
            updatedAdjustment
        })
    }
    catch(error)
    {
        console.log(`Update adjustment controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while updating adjustment!',
            error
        })
    }
}