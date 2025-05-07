import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) =>{
    const body = await readBody(event);
    console.log(body)
    try {
    await mongoose.connect("mongodb://localhost:27017/TabiGames");
    const post = await User.findOne(
    {'events._id': body.id_post},
    { 'events.$': 1 }
    );
    console.log(post)
    return post;
    } catch (e) {
    console.error(e);
    }
});