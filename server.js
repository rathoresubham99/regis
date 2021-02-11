const express = require('express')
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
app.use(cors())
app.use(express.json())
const port= process.env.PORT || 3001

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://regisDB:sunny123@form.bkrgm.mongodb.net/regisDB", { useNewUrlParser: true , useUnifiedTopology: true})
app.use("/",require("./routes/regisRoute"))
if(process.env.NODE_ENV==='production')
{
    app.use(express.static('client/build'))
}
app.listen(port,function(){
    console.log(`Running on the port ${port}`)
})