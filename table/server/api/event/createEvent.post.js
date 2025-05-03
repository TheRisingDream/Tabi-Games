import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) =>{
    const body = await readBody(event);

    try {
            await mongoose.connect("mongodb://localhost:27017/TabiGames");
            const user = await User.updateOne({_id: body.id},
                {$push: {events: {"game_name": body.game_name, 
                    "place": body.place,
                    "difficult": body.difficult,
                    "date": body.date,
                    "link": body.link,
                    "experience": body.experience
                    }
                }
            }
            );
            console.log('Event was added succes')
            }   catch (e) {
                    console.error(e);
                }
    
        return null;

})