const express = require("express");
const app = express();
const port = 8080; // Change the port number if needed

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Send a response to the client
});

// Apply online route
app.post("/apply-online", (req, res) => {
  // Extract name, surname, and email from request body
  const { name, surname, email } = req.body;

  // Send email to admin
  sendEmailToAdmin(email, name, surname);

  res.send("Application received"); // Send a response to the client
});

// Function to send email to admin
const sendEmailToAdmin = (email, name, surname) => {
  // Nodemailer configuration
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    // Configure your email provider here
    service: "gmail",
    auth: {
      user: "info@ivbinternational.org",
      pass: "your-email-password",
    },
  });

  // Email options
  const mailOptions = {
    from: "your-email@gmail.com",
    to: "info@ivbinternational.org",
    subject: `New application received
    ${(name, surname)}`,
    text: `New application received from: ${email}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
