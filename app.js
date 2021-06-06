const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//loads static files
app.use(express.static("./views"));

//Set ejs
app.set("view engine", "ejs")

//Routes
app.get("/", (req, res)=>{
    title="Create new account"
 res.render("register", {title})
})

// Create Server
app.listen(PORT, ()=>{
    console.log(`Server Running PORT : ${PORT}`)
})