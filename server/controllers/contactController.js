const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  const { name, company, phone, email, category, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
   });

  // Mail options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `From ${company || name}, regarding ${category}`,
    text: `Hi, I'm ${name} from ${company}. You can contact me at ${phone}. \n\nMessage:\n${message}`,
  };

  // Send mail
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ success: false, error: "Failed to send email" });
    } else {
      console.log("Email sent:", info.response);
      return res.status(200).json({ success: true, message: "Email sent successfully" });
    }
  });
};

module.exports = {
  sendMail,
};
