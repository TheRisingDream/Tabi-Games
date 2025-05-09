import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
    message: {
        type: String,
        required: true},
    sender: {
        type: String,
        required: true},
    sender_id: {
        type: String,
        required: true},
    resiver: {
        type: String,
        required: true},
    resiver_id: {
        type: String,
        required: true},
    createdAt: { 
        type: Date, 
        default: Date.now }
});

export const Message = model("Message", MessageSchema);