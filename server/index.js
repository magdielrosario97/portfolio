const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const validator = require("validator");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
   origin: "http://localhost:5173",
   methods: ["POST"],
};

const limiter = rateLimit({
   windowMs: 1 * 60 * 1000, // 1 minute
   max: 5,
   message: { message: "Too many requests. Please try again later." },
});

app.use(cors());
app.use(cors(corsOptions));
app.use("/contact", limiter);
app.use(express.json());

app.post("/contact", async (req, res) => {
   const { name, email, message } = req.body;

   // Validate required fields
   if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
   }

   // Validate email format
   if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email address." });
   }

   // limit name/message length
   if (name.length > 100 || message.length > 1000) {
      return res.status(400).json({ message: "Input too long." });
   }

   const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
         user: process.env.EMAIL_USER,
         pass: process.env.EMAIL_PASS,
      },
   });

   const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `${name} sent a message`,
      text: message,
   };

   try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
   } catch (err) {
      console.error("Mail send error:", err.message);
      res.status(500).json({ message: "Something went wrong. Please try again later." });
   }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
