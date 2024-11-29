import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    accountName:
    {
        type: String, 
        required: true
    },
    accountNumber:
    {
        type: String,
        required: true
    },
    balance:
    {
        type: Number,
        required: true
    },
}, {timestamps:true});

export default mongoose.model('Account', accountSchema);