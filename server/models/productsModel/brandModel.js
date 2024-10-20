import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
    image:
    {
        data: Buffer,
        contentType: String
    },
    name:
    {
        type: String, 
        required: true
    },
    description:
    {
        type: String,
        required: true
    },
}, {timestamps:true});

export default mongoose.model('Brand', brandSchema);