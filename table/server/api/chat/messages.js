import { Message } from "~/server/models/message.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log(body)
    try {
        const messages = await Message.find({$or: [
            {   sender_id: body.sender_id, 
            resiver_id: body.resiver_id },
            {   sender_id: body.resiver_id,
            resiver_id: body.sender_id  }]
            }).sort({ createdAt: 1 });
        console.log(messages)
        return messages;
    } catch (e) {
        console.error(e);
        }
});