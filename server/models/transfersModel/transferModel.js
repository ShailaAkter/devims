import mongoose from "mongoose";

const transferSchema = new mongoose.Schema({
    date:
    {
        type: Date, 
        required: true
    },
    ref:
    {
        type: String, 
        required: true
    },
    fromWarehouse:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Warehouse',
        required: true
    },
    toWarehouse:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Warehouse',
        required: true
    },
    totalProducts:
    {
        type: Number, 
        required: true
    },
    orderTax:
    {
        type: Number, 
        required: true
    },
    discount:
    {
        type: Number, 
        required: true
    },
    shipping:
    {
        type: Number, 
        required: true
    },
    details:
    {
        type: Number, 
        required: true
    },

}, {timestamps:true});

export default mongoose.model('Transfer', transferSchema);