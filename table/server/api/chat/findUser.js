import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) =>{
    const body = await readBody(event);
    console.log('find body', body)
    try {
    await mongoose.connect("mongodb://localhost:27017/TabiGames");
    const user = await User.findOne(
    {'events._id': body.id_user});
    console.log("find uer", user)
    return user;
    } catch (e) {
    console.error(e);
    }
});