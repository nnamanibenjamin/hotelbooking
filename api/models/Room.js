import mongoose from "mongoose";

const { Schema, model } = mongoose;

const RoomSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    maxPerson: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    roomNumber: [
        {
            number: Number,
            unavailabledates: [{type: [Date]}],
        }
    ],
   
}, {timestamps: true});


const Room = model('Room', RoomSchema)

export default Room