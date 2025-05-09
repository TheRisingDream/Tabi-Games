import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) =>{
 try {
    await mongoose.connect('mongodb://localhost:27017/TabiGames');

    const posts = await User.find({}).select('events'); 
    const allEvents = posts.flatMap(user => user.events || []);
    return allEvents;
  } catch (error) {
    console.error(error);
    return { error: 'Ошибка при получении постов' };
  }
});
