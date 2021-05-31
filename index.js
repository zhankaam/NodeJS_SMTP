const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


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

app.post('/sendMessage',async function (req,res){

let {name,lastName,message} = req.body

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'HR WANTS ME!', // sender address
        to: "zhankaam@gmail.com", // list of receivers
        subject: "Какое-то сообщение от hr", // Subject line
        //text: "Сообщения от hr-а", // plain text body
        html: `<b>Привет,новое сообщение с вашего портфолио</b>
        имя:<div>${name}</div>
        фамилия:<div>${lastName}</div>
        сообщение:<div>${message}</div>`, // html body
    });


    res.send('blabla yo')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})