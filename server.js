//import dependencies
require("dotenv").config();

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');


const app = express(); 
app.use(cors());
app.use(express.json());
app.use("/", router);
//app.listen(5000, () => console.log("Server Running"));
//This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});



//creatign smtp for nodemailer ot send emails 
const transporter = nodemailer.createTransport({
  service:"gmail",
  //host: "smtp.gmail.com", //replace with your email provider
  //port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.WORD, //replace with the email address
    //replace with the password
  }
});

// verify connection configuration
transporter.verify((err, success) =>{ 
  if (err) {
    console.log(err);
  } else {
    console.log("Server is ready to take our messages");
  }
});

router.post('/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  //var subject = req.body.subject
  const message = req.body.message;
  //var content = `name: ${name} \n email: ${email} \n message: ${message} `
  const mail = {
    from: name, //name
    to: "migmiapol@gmail.com",// receiver email,//process.env.EMAIL
    //subject: subject,
    //text: message
      html: `<p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>`,
  };
 //console.log(`mail ${mail}`);
  transporter.sendMail(mail, (error) => {
    if (error) {
     res.json({ status: "ERROR"});
     //console.log(`mail ${mail}`);
   } else {
     //console.log("Email sent successssfully");
     res.json({ status: "Email sent" });
   }
  });
});


// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/react_portfolio/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/react_portfolio/build', 'index.html'));
    });
};

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});



app.listen(5000, () => console.log("Server Running"));

//const port = 3001 || 5000;
//app.listen(port, () => {
 //console.log(`Server is running on port: ${port}`);
//});
//prev:  if (err) {
    //   res.json({
    //     status: 'fail'
       
    //   })
    //    console.log("error" + err);
    // } else {
    //   res.json({
    //    status: 'success'
      
    //   })
    //    console.log("email sent successfully");
    // }
