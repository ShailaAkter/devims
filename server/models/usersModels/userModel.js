import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:
    {
        type: String, 
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
    status: 
    {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    role:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true
    },
    avatar:
    {
        data: Buffer,
        contentType: String
    }
}, {timestamps:true});

export default mongoose.model('User', userSchema);