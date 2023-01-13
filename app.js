const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const port = 5000

function sendEmail(){
    return new Promise((resolve,reject) => {
        var transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'athirasivadasan1@gmail.com',
                pass:'rmeypvjxzfoymulw'
            }
        })

    const mail_configs = {
        from:'athirasivadasan1@gmail.com',
        to:'meerasivadasan1@gmail.com',
        subject:'Testing Email',
        text: "justing checking if this email will be sent"
    }
    transporter.sendMail(mail_configs,function(error,info){
        if(error){
            console.log(error);
            return reject({message: 'an error has occured'})
        }
        return resolve({message:"email sent succesfully"})
    })
    })
}

app.get('/',(req,res) =>{
    sendEmail()
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message))
})

app.listen(port,() =>{
    console.log(`listening at http://localhost:${5000}`)
})