import mongoose from "mongoose";

const adjustmentSchema = new mongoose.Schema({
    date:
    {
        type: Date, 
        required: true
    },
    warehouse:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Warehouse',
        required: true
    },
    ref:
    {
        type: String, 
        required: true
    },
    totalProducts:
    {
        type: Number, 
        required: true
    },

}, {timestamps:true});

export default mongoose.model('Adjustment', adjustmentSchema);