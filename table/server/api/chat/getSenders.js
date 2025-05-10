import { Message } from "~/server/models/message.model";
import { User } from "~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log(body)
    try {
        const senderIds = await Message.distinct('sender_id', {
            resiver_id: body.userId
        });
        const senders = await User.find({ _id: { $in: senderIds } });
        const result = senders.map(sender => ({
            sender_id: sender._id,
            sender: sender.username 
        }));
        console.log("getsender", result )
        return result;
    } catch (e) {
        console.error(e);
    }
});