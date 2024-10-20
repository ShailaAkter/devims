import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName:
    {
        type: String, 
        required: true
    },
    productCode:
    {
        type: String,
        required: true
    },
    category:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    brand:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    orderTax:
    {
        type: String,
        required: true
    },
    taxMethod:
    {
        type: String,
        required: true
    },
    image:
    {
        data: Buffer,
        contentType: String
    },
    productDetails:
    {
        type: String,
        required: true
    },
    productType:
    {
        type: String,
        required: true
    },
    productCost:
    {
        type: Number,
        required: true
    },
    productPrice:
    {
        type: Number,
        required: true
    },
    unitProduct:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Unit',
        required: true
    },
    unitSale:
    {
        type: Number,
        required: true
    },
    unitPurchase:
    {
        type: Number,
        required: true
    },
    minimumSaleQuantity:
    {
        type: Number,
        required: true
    },
    stockAlert:
    {
        type: String,
        required: true
    },
}, {timestamps:true});

export default mongoose.model('Product', productSchema);