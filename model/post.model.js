const mongoose = require("mongoose")
const PostShema = mongoose.Schema({
    title:String,
    body:String,
    device:String,
    no_of_comments:Number,
    userID:String
})



const PostModel = mongoose.model("post",PostShema)

module.exports={
    PostModel
}