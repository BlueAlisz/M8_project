'use strict';
const nodemailer = require('nodemailer');

async function verifyEmail(username,email) {
// สร้างออปเจ็ค transporter เพื่อกำหนดการเชื่อมต่อ SMTP และใช้ตอนส่งเมล
let transporter = nodemailer.createTransport({
 host: 'smtp.gmail.com',
 port: 587,
 secure: false, 
 auth: { 
   user: 'nattaphatblue.2545@gmail.com', 
   pass: 'mcihoujavakwyhmp' 
 }
});
// เริ่มทำการส่งอีเมล
let info = await transporter.sendMail({
from: '"Fred Foo 👻" <nattaphatblue.2545@gmail.com>', 
to: email, 
subject: 'Please confirm your account', 
text: 'Hello world?', 
html: `<h1>Email Confirmation</h1>
<h2>Hello ${username}</h2>
<p>Thank you for register. Please confirm your email by clicking on the following link</p>
<a href=http://localhost:3000/users/confirm/${username}> Click here</a>`
});

console.log('Message sent: %s', info.messageId);
}
//main().catch(console.error);
module.exports = verifyEmail