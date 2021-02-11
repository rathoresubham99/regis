const mongoose=require("mongoose")
const regisSchema={
    username:{type:String,unique:true,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true}
}
const Regis=mongoose.model("regis",regisSchema)

module.exports=Regis
