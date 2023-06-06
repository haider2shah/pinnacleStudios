const path = require('path')
const helmet = require('helmet');
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use("/voleo/", express.static("client/build"));
  app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'"],
      imgSrc: ["'self"]
    }
  }))

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pinnaclestudios.co@gmail.com',
    pass: 'aimbecevhoxnoknf',
  },
});

// Define the API endpoint for sending emails
app.post('/send-email', (req, res) => {
  const { name, email, company, number, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'Pinnaclestudios@yahoo.com',
    subject: `${name} contacted you from PinnacleStudios`,
    replyTo: email,
    text: `${name} contacted you form ${company}, provided this number ${number}, their email is ${email} and this is their message.
    Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
        res.status(500).send('Error sending email');
    } else {
        console.log('Email sent: ' + info.response);
        console.log(mailOptions)
        res.send('Email sent successfully');
    }
  });
});

// Start the server
const port = 8888; // Choose a port number of your choice
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});