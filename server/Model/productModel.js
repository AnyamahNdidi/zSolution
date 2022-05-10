const { Timestamp } = require("mongodb")
const mongoose = require("mongoose")

const productSchema = mongoose.Schema({

  make:{
    type:String
  },
  model:{
    type:String
  }, 
  price:{
    type:Number
  },
  avatar:{
    type:String
  },
  millage:{
    type:String
  }, 
   user:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"users"
    }
  ],

},
{
  timestamps:true,
}
)

module.exports = mongoose.model("allProduct", productSchema)