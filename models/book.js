import mongoose from "mongoose";

// book schema
const schema = new mongoose.Schema({
  
    title:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

});

// creating a library model
export const Library = mongoose.model("Library",schema);