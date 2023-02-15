import mongoose from "mongoose";

const { Schema, model } = mongoose;

const RoomSchema = new Schema({

})

const Room = model('Room', RoomSchema)

export default Room