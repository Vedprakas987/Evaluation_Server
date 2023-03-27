const express = require("express")
const userRouter = express.Router()
const bcrypt = require("bcrypt")
const jsw = require("jsonwebtoken")
const { UserModel } = require("../model/user.model")
userRouter.use(express.json())

userRouter.post("/register",(req,res)=>{
    const {email,password,gender,age,city,is_married,name}=req.body
    bcrypt.hash(password,3,function(err,hash){
     const new_user = new UserModel({name:name,email:email,password:hash,gender:gender,age:age,city:city,is_married:is_married})
     new_user.save()
     res.send({"msg":"new user is added"})
    })
})
userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    const user = await UserModel.find({email})
    console.log(user)
    if(user){
    bcrypt.compare(password,user[0].password, function(err, result) {
    if(result){
     res.send({"msg":"login Sucessfull",token:jsw.sign({"userID":user[0]._id},"masai")})
    }else{
     res.send({"msg":"please fill correct detail"})
    }
 });
    }
 })
module.exports={
    userRouter
}