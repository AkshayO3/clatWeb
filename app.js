const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose=require("mongoose");

const app=express()
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("partials/header")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/pricing",(req,res)=>{
    res.render("pricing")
})

app.get("/courses",(req,res)=>{
    res.render("courses")
})
app.listen(3000, function() {
    console.log("Server started on port 3000");
});
