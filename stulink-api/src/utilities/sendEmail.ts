import nodemailer from "nodemailer";

export const sendEmail = async (options: {
  to: any;
  subject: any;
  text: any;
}) => {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    secure: false,
    port: 2525,
    // service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: "warhistories101@gmail.com",
    subject: options.subject,
    text: options.text,
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
  console.log("mail sent");
};
