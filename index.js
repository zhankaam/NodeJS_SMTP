const express = require('express')
const nodemailer = require("nodemailer");
const app = express()
const port = 3000

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 25,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'zhankaam@gmail.com',
        pass: '07zhan12lpsva03600729',
    },
    tls:{
        rejectUnauthorized:false
    }
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sendMessage',async function (req,res){


    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'Zhanat message', // sender address
        to: "zhankaam@gmail.com", // list of receivers
        subject: "Какое-то сообщение от hr", // Subject line
        //text: "Сообщения от hr-а", // plain text body
        html: `<b>Привет</b>Новое сообщение от формы в портфолио`, // html body
    });


    res.send('blabla yo')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})