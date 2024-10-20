import mongoose from "mongoose";

const roleSchema =  new mongoose.Schema({
    rolename: 
    {
        type : String,
        required: true,
        unique: true
    },

    description:
    {
        type: String, 
        required: true
    }
}, {timestamps:true});

export default mongoose.model('Role', roleSchema);