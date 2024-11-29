import transferModel from "../../models/transfersModel/transferModel.js";

export const updateTransferController = async(req, res) =>
{
    try
    {
        const {date, ref, fromWarehouse, toWarehouse, totalProducts, orderTax, discount, shipping, details} = req.body;

        if(!date)
        {
            return res.send({message: "Date is required!"})
        }
        if(!ref)
        {
            return res.send({message: "Reference is required!"})
        }
        if(!fromWarehouse)
        { 
            return res.send({message: "From warehouse is required!"})
        }
        if(!toWarehouse)
        { 
            return res.send({message: "To warehouse is required!"})
        }

        if(!totalProducts)
        {
            return res.send({message: "Total products is required!"})
        }
        if(!orderTax)
        {
            return res.send({message: "Order tax is required!"})
        }
        if(!discount)
        {
            return res.send({message: "Discount is required!"})
        }
        if(!shipping)
        {
            return res.send({message: "Shipping is required!"})
        }
        if(!details)
        {
            return res.send({message: "Details is required!"})
        }

        const updatedTransfer = await transferModel.findByIdAndUpdate(
            req.params.transferId,
            {
                date, 
                ref,
                fromWarehouse,
                toWarehouse,
                totalProducts,
                orderTax,
                discount,
                shipping,
                details
            },
            { new: true } 
        );

        res.status(200).send({
            success: true,
            message: "Transfer updated successfully!",
            updatedTransfer
        })
    }
    catch(error)
    {
        console.log(`Update transfer controller error = ${error}`);

        res.status(500).send({
            success: false,
            message: 'Error occured while updating transfer!',
            error
        })
    }
}