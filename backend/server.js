const express = require("express");
const app = express();
const port = 8080; // Change the port number if needed
app.use(express.json());
const nodemailer = require("nodemailer");
// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Send a response to the client
});

// Apply online route
app.post("/apply-online", (req, res) => {
  // Extract name, surname, and email from request body
  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email ;

  // Send email to admin
  sendEmailToAdmin(email, name, surname);

  res.send("Application received well"); // Send a response to the client
});

// Function to send email to admin
const sendEmailToAdmin = (email, name, surname) => {
  // Nodemailer configuration
  
  const transporter = nodemailer.createTransport({
    // Configure your email provider here

    service: "gmail",
    host: "host",
    port: 25,
    secure: false,
    auth: {
      type: "OAuth2",
      user: "ivbfunding@gmail.com",

      accessToken,
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
    
  });

  // Email options
  const mailOptions = {
    from: "info@ivbinternational.org",
    to: email,
    subject: `New application received from
    ${(name, surname)}`,
    text: `New application received from: ${email}`,
  };

  // Send the email
  
  transporter.sendMail(mailOptions, (err, infor) => {
    if (err) return console.log(err);
    return console.log(infor);
  });
};

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
