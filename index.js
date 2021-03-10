const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');



const app=express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.get('/',()=>{
    resizeBy.send('welcome to my form')
})
app.post('/api/forma',(req,res)=>{

    let data=req.body;
    let smtpTransporter = nodemailer.createTransport({
        service:'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth:{
        type: 'OAuth2',
        user: 'user@example.com',
        clientId: '000000000000-xxx0.apps.googleusercontent.com',
        clientSecret: 'XxxxxXXxX0xxxxxxxx0XXxX0',
        refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
        accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x'
        }
    });


    let mailOptions={
        from:'yashank7696@gmail.com',
        to:'yashank1050.cse18@chitkara.edu.in',
        subject:data.Subject,
        html:`
        <h3> Issue Regarding  ${data.Category}</h3>

        <p>${data.Description}</p>
        
        `
    };
    

    smtpTransporter.sendMail(mailOptions,(error,response)=>{
        if(error){
            console.log(error)
            res.send(error);
        }
        else{
            console.log(response)
            res.send(response)
        }
    })

    smtpTransporter.close();

})

const PORT = process.env.PORT||3001;
app.listen(PORT,()=>{
    console.log("Server is running");
})