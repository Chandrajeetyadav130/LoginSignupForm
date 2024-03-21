const express=require("express");
const connectDb=require("./db/dbConnect")
const app=express();
const User=require("./db/user")
const cors=require("cors")
app.use(express.json())
app.use(cors())
// Registrationss
app.post('/register',async (req,res)=>{
    try{
        const {userName,password}=await req.body;
        const user=new User({userName,password})
        await user.save()
        res.status(201).json({message:"registration successful"})
        console.log(req.body)
    }
    catch(error){
        console.log(error)
    }
})
//login
app.post('/login',async(req,res)=>{
try{
  const {userName,password}=await req.body;
  const user=await User.findOne({userName})
  if(!user){
    return res.status(401).json({error:"invalid user name or pwd"})
  }
  if(user.password!==password){
    return res.status(401).json({error:"Invalid user pwd"})
  }
  res.status(200).json({message:"Login successful"})
}
catch(error){
    console.log(error)
}
})
connectDb()
const port=8000;
app.listen(port,()=>{
    console.log("listen at port number 8000")
})