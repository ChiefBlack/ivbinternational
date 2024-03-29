const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  OAUTH_PLAYGROUND
);

// send mail
const sendMail = (to, url, txt) => {
  
  const smtpTransport = nodemailer.createTransport({
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

  const mailOptions = {
    from: SENDER_EMAIL_ADDRESS,
    to: to,
    subject: "Gude channel",
    html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the Gude channel.</h2>
            <p>Congratulations! You're almost set to start using Gude✮Marketplace.
                Just click the button below to validate your email address.
            </p>
            
            <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
        
            <p>If the button doesn't work for any reason, you can also click on the link below:</p>
        
            <div>${url}</div>
            </div>
        `,
  };

  smtpTransport.sendMail(mailOptions, (err, infor) => {
    if (err) return console.log(err);
    return console.log(infor);
  });
};

module.exports = sendMail;
