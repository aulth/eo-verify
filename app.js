require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT;
const emailPass = process.env.pass;
app.use(express.json());
const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    auth:{
        user:'aulth.usman@gmail.com',
        pass: emailPass
    }
})
app.get('/', (req, res)=>{
    res.send("Hello")
})
app.get('/sendotp/:appName/:email', (req, res)=>{
    const otp = Math.floor(Math.random()*10000)
    const {email, appName} = req.params;
    const mailOption = {
        from:'aulth.usman@gmail.com',
        to:email,
        subject:"Otp - verification",
        html :`<h2>Your verification code for ${appName} is : ${otp} </h2>`
    }
    transporter.sendMail(mailOption, (err, info)=>{
        if(err){
            res.status(400).json({success:false, message:"Some error occured", err})
        }else{
            res.status(200).json({success:true, message:`Otp sent to ${email}`, otp:otp})
        }
    })
})
app.get('/resend/:appName/:email', (req, res)=>{
    const otp = Math.floor(Math.random()*10000)
    const {email, appName} = req.params;
    const mailOption = {
        from:'aulth.usman@gmail.com',
        to:email,
        subject:"Otp - Resend - verification",
        html :`<h2>Your verification code for ${appName} is : ${otp} </h2>`
    }
    transporter.sendMail(mailOption, (err, info)=>{
        if(err){
            res.status(400).json({success:false, message:"Some error occured", err})
        }else{
            res.status(200).json({success:true, message:`New otp sent to ${email}`, otp:otp})
        }
    })
})
app.listen(port, ()=>{
    console.log('listenign'+port)
})