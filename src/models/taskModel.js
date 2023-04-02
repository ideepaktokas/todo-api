import mongoose from "mongoose";
import validator from "validator";

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // name of the collection as in userModel.js
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

export default  mongoose.model('Task', taskSchema)