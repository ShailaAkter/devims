import mongoose from "mongoose";

const categorySchema =  new mongoose.Schema({
    categoryCode: 
    {
        type : String,
        required: true,
        unique: true
    },

    categoryName:
    {
        type: String, 
        required: true
    }
}, {timestamps:true});

export default mongoose.model('Category', categorySchema);