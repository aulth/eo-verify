require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth:{
        user:'aulth.usman@gmail.com',
        pass:"fkroipvjpbwopgrk"
    }
})
app.get('/', (req, res)=>{
    const mailOption={
        from:"aulth.usman@gmail.com",
        to:"mohdusman.you@gmail.com",
        subject:"Hello",
        text:"Hello huehue"
    }
    transporter.sendMail(mailOption, (err, info)=>{
        if(err) throw err;
        console.log(info);
    })
    res.send("Hello Usman")
})

app.listen(port, ()=>{
    console.log("Server is running on port "+port)
})