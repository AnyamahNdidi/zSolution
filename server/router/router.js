const express = require("express")

const router = express.Router()
const {upload} = require("../utlis/multer")

const {proDuct} = require("../Controller/productController")

router.post("/add", upload, proDuct)

module.exports = router