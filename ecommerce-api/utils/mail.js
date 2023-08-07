import nodemailer from "nodemailer";

export const sendMail = ({ to, sub, msg }) => {
  // create a transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "ecomwolmart@gmail.com",
      pass: "kwprdzvmtfhmestf",
    },
  });

  // send mail
  transporter.sendMail({
    from: "Wolmart <ecomwolmart@gmail.com>",
    to: to,
    subject: sub,
    text: msg,
  });
};
