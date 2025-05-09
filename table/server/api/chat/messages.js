import { Message } from "~/server/models/message.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log(body)
        try {
        await mongoose.connect("mongodb://localhost:27017/TabiGames");
        const messages = await Message.find({
        sender_id: body.resiver_id,
        resiver_id: body.sender_id 
        }).sort({ createdAt: 1 });
        console.log(messages)
        return messages;
        }catch (e) {
        console.error(e);
        }
});