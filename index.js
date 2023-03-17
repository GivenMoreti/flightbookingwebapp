//this is the server
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const routesUrls =require("./routes/routes");
const cors = require("cors");

dotenv.config()
const app = express()

//connect application to db
// mongoose.connect('mongodb://localhost:27017/bookingDB',function(){
//     console.log("connected to local db");
// })
mongoose.connect(process.env.DATABASE_ACCESS,function(){
    console.log("database connected successfully");
});
//every routes has api appended
//e.g www.mywebpage.com/api/signup.
app.use(express.json()) //this activates bodyparser
app.use(cors())
app.use("/api",routesUrls)
//order is for the app.use() is critical 












 


app.listen(process.env.PORT,()=>{
    console.log("server listening on port" + " "+ process.env.PORT)
});