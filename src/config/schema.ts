import mongoose from "mongoose";

const transferSchema = new mongoose.Schema({
    transfer: {
        type: String,
        required: true
    },

    status: {
        type: String,
        default: "In Progress",
        enum: ['In Progress', 'Approved']
    },

    isDeleted: {
        type: Boolean
    }
},
{
    timestamps: {
        currentTime: () => new Date().setUTCHours(0,0,0,0)
    },

    versionKey: false
})

export const transferList = mongoose.model("transfer", transferSchema);