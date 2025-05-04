import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) =>{
    let user;
    const email = getQuery(event, 'email')
    try {
    await mongoose.connect("mongodb://localhost:27017/TabiGames");
    user = await User.findOne(
    {email: email.email}
    );
    return user;
    } catch (e) {
    console.error(e);
    }
});