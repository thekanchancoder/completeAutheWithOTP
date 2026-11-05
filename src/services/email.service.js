import nodemailer from "nodemailer";
import authConfig from "../config/auth.config.js";

const aconfig = authConfig();
// TRANSPORTER ka use email bhejne ke liye krte h 
const transporter = nodemailer.createTransport({
  // service: 'gmail',

host: "smtp.gmail.com",
  port: 465,
  secure: true,

  auth: {
    type: 'OAuth2',
    user: aconfig.googleUser,
    clientId: aconfig.googleClientId,
    clientSecret: aconfig.googleClientSecret,
    refreshToken: aconfig.googleRefreshToken,
  },

});

// Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email server:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});






// Function to send email
  export  const sendEmail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Your Name" <${aconfig.googleUser}>`, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html, // html body
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('Error sending email:', error);
  }
};