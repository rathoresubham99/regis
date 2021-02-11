const express=require("express")
const router=express.Router()
const Regis=require("../models/regisModel")
const bcrypt=require("bcrypt")
router.route("/create").post(async(req,res)=>{
const saltPassword=await bcrypt.genSalt(10)
const securePassword = await bcrypt.hash(req.body.password, saltPassword)
const email=req.body.email
const username=req.body.username
const password=securePassword
const newRegis=Regis({
    username,
    email,
    password,
})
newRegis.save()
})
router.route("/view").get((req,res)=>{
    Regis.find()
    .then(viewSubmissions=>res.json(viewSubmissions))
})

module.exports=router