const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer")

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'akshaybhandari020@gmail.com',
        pass: 'wbrcyetwawogufbc'
    }
});

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/pricing", (req, res) => {
    res.render("pricing")
})

app.get("/courses", (req, res) => {
    res.render("courses")
})

app.post("/contact", (req, res) => {
    // console.log(req.body)
    const name=req.body.studName
    const email=req.body.studEmail
    const message=req.body.message

    const mailOptions = {
        from: email, // Replace with your email address
        to: 'akshay022812@gmail.com', // Replace with the recipient's email address
        subject: 'Contact Us Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
    transporter.sendMail(mailOptions).then(()=>{res.send("Email Sent Successfully")})
        .catch(()=>{res.send("Error")})
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
