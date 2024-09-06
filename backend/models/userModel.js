const mongoose= require("mongoose");
const userSchema=new mongoose.Schema(
  {
    name:{
      type: String,
      required:true,
    },
    userId:{
      type:String,
      required:true,
    },
    password:{
      type:String,
      required:true,
    },
    contact:{
      type:Number,
      required:true,
    },
  
    verified:{
      type:Boolean
    }

  },
  {timestamps: true}
);

const Users=mongoose.model("users",userSchema);
module.exports =Users;