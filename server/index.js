const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

const db = require("./Config/MongooseConfig")
const aiRoutes = require("./Routes/aiRoutes")

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api",aiRoutes)

app.listen(5000,()=>{
console.log("Server running on port 5000")
})