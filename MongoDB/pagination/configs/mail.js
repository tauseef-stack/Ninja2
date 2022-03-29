const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "5376f7d5edf433", // generated ethereal user
      pass: "7126b91fd74a22", // generated ethereal password
    },
});
  
module.exports = transporter;