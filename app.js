

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
var NaMe= "";

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect('mongodb://localhost:27017/mariadb', {useNewUrlParser: true});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
console.log("Connection Successful!");
});

const userSchema = {
    name : String
};

const user = mongoose.model("user", userSchema );






app.get("/", function(req,res){

    res.sendFile(__dirname + "index.html");
    res.render("crud");
});

app.post("/", function(req,res){
    NaMe=req.body.uname;
    console.log(NaMe);
    const cu = new user({
        name: NaMe
    });

    cu.save();
})

app.listen(3000, function(){

    console.log("server started");
})