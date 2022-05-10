const productSchema =  require("../Model/productModel")
const cloudinary = require("../utlis/cloudinary")


const proDuct =async (req, res)=> {
  try{

    const {make, model, price, millage} = req.body

    const image = await cloudinary.uploader.upload(req.file.path)

    const createUser = await productSchema.create({
       make,
       model,
       price,
       millage,
       avatar:image.secure_url
    })

    res.status(201).json({ 
      message:"product uplaoded",
      data:createUser
    })

  }catch(error){
    res.status(400).json({ 
      message: error.message
    })
  }
}

module.exports = {
  proDuct
}