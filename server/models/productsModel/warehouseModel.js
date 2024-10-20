import mongoose from "mongoose";

const warehouseSchema =  new mongoose.Schema({
    name: 
    {
        type : String,
        required: true,
    },
    email:
    {
        type: String, 
        required: true
    },
    phone:
    {
        type: String,
        required: true
    },
    country:
    {
        type: String,
        required: true
    },
    city:
    {
        type: String,
        required: true
    },
    zipCode:
    {
        type: String,
        required: true
    }
}, {timestamps:true});

export default mongoose.model('Warehouse', warehouseSchema);