import mongoose from "mongoose";

const unitSchema =  new mongoose.Schema({
    title: 
    {
        type : String,
        required: true,
    },
    shortName:
    {
        type: String, 
        required: true
    },
    baseUnit:
    {
        type: String,
        required: true
    },
    operator:
    {
        type: String,
        required: true
    },
    operationValue:
    {
        type: Number,
        required: true
    },
}, {timestamps:true});

export default mongoose.model('Unit', unitSchema);