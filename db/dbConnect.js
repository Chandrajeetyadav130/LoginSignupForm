const mongoose=require("mongoose");
const db='mongodb+srv://chandrajeetyadav130:Chandrajeet@cluster0.roxzjic.mongodb.net/MernStack'
const connectDb=async()=>{
    try{
    //    await mongoose.connect('mongodb://127.0.0.1:27017/merndb')
    await mongoose.connect(db)

       console.log("connection ok")
    }
    catch(error){
        console.log(error)
    }
}
module.exports=connectDb;