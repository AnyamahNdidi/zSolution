const { Timestamp } = require("mongodb")
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

  name:{
    type:String
  },
  email:{
    type:String
  }, 
  password:{
    type:Number
  },
  product:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"allProduct"
    }
  ],
},
timestamps:{true}
)

module.exports = mongoose.model("users", userSchema)