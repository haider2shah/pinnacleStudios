const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/pinnacleStudios-Contact-Form")
.then(() => {
    console.log("connected")
})
.catch(()=>{
    console.log("Failed")
})

const contactInfo = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const collection=mongoose.model("collection", contactInfo)

module.exports=collection