const mongoose=require('mongoose');
const express =require('express');
const app =express();
require('dotenv').config();

//data 
var bodyParsar= require('body-parser');
app.use(bodyParsar.json());
app.use(express.json());


mongoose.connect(process.env.DB)

 //Import Routes
 const userRoute = require("./routes/route")


 //Route Middlewares
app.use("/api", userRoute);

app.listen(process.env.PORT ,() => {
  console.log(`Example app listening on port`)
})


