'use strict';
const nodemailer = require('nodemailer');

async function receiptEmail() {
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
html: `<h1> Thank you for you buying</h1>
       <h1> Scan barcode to payment</h1>
       <img src="cid:payment">`,
attachments: [{
  filename: 'payment.jpg',
  path: __dirname +'/payment.jpg',
  cid: 'payment' //my mistake was putting "cid:logo@cid" here! 
}]
});

console.log('Message sent: %s', info.messageId);
}
//main().catch(console.error);
module.exports = receiptEmail