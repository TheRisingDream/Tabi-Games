import { User } from "~~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) =>{
const body = await readBody(event);

try {
        await mongoose.connect("mongodb://localhost:27017/TabiGames");
        const result = await User.updateOne({'events._id': body.id_post},
        { 
        $set: {
        "events.$.game_name": body.game_name,
        "events.$.place": body.place,
        "events.$.difficult": body.difficult,
        "events.$.date": body.date,
        "events.$.link": body.link,
        "events.$.experience": body.experience,
        },
        }
        );
        console.log('Event was updated succes')
        }   catch (e) {
        console.error(e);
        }
        return null;

})