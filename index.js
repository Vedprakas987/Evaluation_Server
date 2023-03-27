const express = require("express")
const { connection } = require("./connection/db")
const { Auth } = require("./Middleware/Authenticator.middleware")
const { postRouter } = require("./routes/post.router")
const { userRouter } = require("./routes/user.router")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.use("/users",userRouter)
app.use(Auth)
app.use("/posts",postRouter)
app.listen(4700, async()=>{
    try{
await connection
console.log("server is running on port 4700")
    }catch(err){
console.log("You are disconnected")
    }
})