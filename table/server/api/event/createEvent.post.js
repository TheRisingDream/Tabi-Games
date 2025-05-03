import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) =>{
    const body = await readBody(event);

    try {
            await mongoose.connect("mongodb://localhost:27017/TabiGames");
            const user = new User ({
                email:body.email,
                username:body.username,
                password:body.password,        
            });
            await user.save();
            }   catch (e) {
                    console.error(e);
                }
    
        return null;

})