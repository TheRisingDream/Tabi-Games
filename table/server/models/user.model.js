import { Schema, model } from "mongoose";

const UserSchema = new Schema ({
    username:  {
        type: String,
        required: true},
    email: {
        type: String,
        required: true,
        unique: true},
    password: {
        type: String,
        required: true},
    events: [{
        game_name:{ type: String},
        place:{ type: String},
        difficult:{ type: String},
        date:{ type: String},
        link:{ type: String},
        experience:{ type: String}
    }]
})
export const User = model("User", UserSchema);