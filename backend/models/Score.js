import mongoose
from "mongoose";

const scoreSchema =
  mongoose.Schema({

    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    },

    category:{
      type:String,
      required:true
    },

    score:{
      type:Number,
      required:true
    }

  },{
    timestamps:true
  });

const Score =
  mongoose.model(
    "Score",
    scoreSchema
  );

export default Score;