import cors from "cors";
import 'dotenv/config';
import express from "express";
import nodemailer from "nodemailer";
const PORT = process.env.PORT
const router = express.Router();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);


const contactEmail = nodemailer.createTransport(###)

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else{
        console.log("Ready to Send");
    }
});

app.post('/send', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.em;
    var subject = req.body.subject;
    const message = req.body.message;
    console.log(req.body)
    var mail = {
        from: email,
        to: ###,
        subject: subject,
        text: name + " " + email + " " + message
    }

    contactEmail.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
            status: 'fail'
        })
        } else {
            res.json({
            status: 'success'
        })
        }
    })
})


app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
