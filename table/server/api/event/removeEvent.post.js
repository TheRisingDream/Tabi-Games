import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) =>{
    const body = await readBody(event);

    try {
            await mongoose.connect("mongodb://localhost:27017/TabiGames");

            const result = await User.updateOne({'events._id': body.id_post},
                {
                    $pull: {
                    events: { _id: body.id_post }
                    }
                }
            );
            console.log(body.id_post)
            }   catch (e) {
                    console.error(e);
                }
    
        return null;

})