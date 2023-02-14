let express = require("express");
let app= express();

let route = require("./route.js");
app.use("/",route);
app.listen(process.env.PORT || 3000, function(){
    console.log(" Express app running at Port"+(process.env.PORT||3000))
 })