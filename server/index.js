require('./config/db')
const express = require("express")
const app = express()
const cors = require("cors")
const port  = 5050

// app.get("/", ()=>{
//   console.log("api is up and running ");
// })

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/api", require("./router/router"))
// app.use("/user", require("./router/userRouter"))

app.listen(port, ()=>{
  console.log(`up and runnng ${port}`)
})