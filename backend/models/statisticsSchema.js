import mongoose from "mongoose";

const schema2 =mongoose.Schema(
    {
        name:{
            type: String,
            required : true
        },
      
        email:{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
        affectedArea:{
            type: String,
            required: true
        },
        phone:{
            type: Number,
            required: true
        }
    }
)
export default  mongoose.model("Statistic",schema2);
