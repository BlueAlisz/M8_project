'use strict';
const nodemailer = require('nodemailer');

async function verifyEmail(username) {
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
to: 'nattaphatblue.2762@gmail.com', 
subject: 'Hello ✔', 
text: 'Hello world?', 
html: `<b></b>please click this link </b>
<a href=http://localhost:3000/users/confirm/${username}> Click here</a>`
});

console.log('Message sent: %s', info.messageId);
}
//main().catch(console.error);
module.exports = verifyEmail