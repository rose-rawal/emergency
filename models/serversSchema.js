import mongoose from "mongoose";
const schema =mongoose.Schema(
    {
        name:{
            type: String,
            required : true
        },
        password:{
            type: String,
            required : true
        },
        email:{
            type: String,
            required: true
        },
        phone:{
            type: Number,
            required: true
        }
    }
)

 export const serverSchema = mongoose.model("Server",schema);
 