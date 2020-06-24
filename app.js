

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
var NaMe= "";
var mess ="";
var dbUsers =[];

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

    res.render("home");

    
});

app.post("/", function(req,res){
       res.render("crud"); 

});


app.get("/crud",function(req,res){

    res.render("crud");
    
})
app.post("/crud",function(req,res){

    NaMe=req.body.uname;
    console.log(NaMe);
    const cu = new user({
        name: NaMe
    });

    cu.save();

    mess = "Entered successfully";
    res.render("login");
    
})

app.get("/login",function(req,res){

    res.render("login");
    
})

app.post("/login",function(req,res){

    res.render("login");
    
})



app.listen(3000, function(){

    console.log("server started");
})