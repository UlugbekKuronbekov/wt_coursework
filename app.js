const express = require("express");
const app = express();
const event = require("./routes/user");
const ejs = require('ejs');

app.listen(3001 || process.env.PORT,() => {
    console.log("server started...")
})

app.set('view engine', 'ejs');
app.use(express.json())
app.use("/events", event);

app.get("/", (req,res) => {
    res.render("../views/user.ejs");
})

app.get("/update/:id", (req,res) => {
    res.render("../views/userOne.ejs");
})