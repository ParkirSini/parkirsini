const CronJob = require("cron").CronJob;
const { Booking, Customer } = require('../models');
const SibApiV3Sdk = require('sib-api-v3-sdk')
const defaultClient = SibApiV3Sdk.ApiClient.instance
const apiKey = defaultClient.authentications['api-key']

const job = new CronJob(
   //  "*/10 * * * * *",//untuk cek tiap 10 detik
   "0 0 * * *",
   async function () {
      console.log("Running your scheduled task...");
      try {
         const bookings = await Booking.findAll();
         console.log("Fetched bookings:", bookings);

         for (const booking of bookings) {
            if (booking.duration === 0) {
               booking.paid = false;
            } else if (booking.duration === 3) {
               apiKey.apiKey = process.env.SENDINBLUE_KEY
               const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
               const customer = await Customer.findOne({
                  where: {
                     id: booking.customerId
                  }
               });
               console.log(customer.email);
               const sender = {
                  email: "parkirsini@gmail.com",
                  name: "Parkir Sini"
               }
               const receivers = [
                  {
                     email: `${customer.email}`
                  }
               ]
               const sendEmail = await apiInstance.sendTransacEmail({
                  sender,
                  to: receivers,
                  subject: "Payment Receipt",
                  htmlContent: `<!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
                <html lang="en">
                
                <head></head>
                <div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
                Apple Receipt<div>
                 ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿
                </div>
                </div>
                
                <body style="font-family:&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif;background-color:#ffffff">
                <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%"
                style="max-width:37.5em;margin:0 auto;padding:20px 0 48px;width:660px">
                <tr style="width:100%">
                  <td>
                     <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                        <tbody>
                           <tr>
                              <td>
                              <td><img alt="Parkir Sini Logo" src="https://i.ibb.co/jL6JKcb/fp-logo.png" width="150" height="50"
                                    style="display:block;outline:none;border:none;text-decoration:none" /></td>
                              <td align="right" style="display:table-cell">
                                 <p style="font-size:32px;line-height:24px;margin:16px 0;font-weight:300;color:#888888">Reminder
                                 </p>
                              </td>
                  </td>
                </tr>
                </tbody>
                </table>
                <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                     <td>
                        <p
                           style="font-size:22px;line-height:24px;margin:36px 0 40px 0;text-align:center;font-weight:700;color:#888888">
                           Your Parking Space is nearing its due date</p>
                     </td>
                  </tr>
                </tbody>
                </table>
                <table
                style="border-collapse:collapse;border-spacing:0px;color:rgb(51,51,51);background-color:rgb(250,250,250);border-radius:3px;font-size:12px"
                align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                     <td>
                        <table width="100%" style="height:46px" align="center" role="presentation" cellSpacing="0"
                           cellPadding="0" border="0">
                           <tbody style="width:100%">
                              <tr style="width:100%">
                                 <td colSpan="2">
                                    <table width="100%" align="center" role="presentation" cellSpacing="0" cellPadding="0"
                                       border="0">
                                       <tbody style="width:100%">
                                          <tr style="width:100%">
                                             <td
                                                style="padding-left:20px;border-style:solid;border-color:white;border-width:0px 1px 1px 0px;height:44px">
                                                <p
                                                   style="font-size:10px;line-height:1.4;margin:0;padding:0;color:rgb(102,102,102)">
                                                   USER ID</p><a target="_blank"
                                                   style="color:#15c;text-decoration:underline;font-size:12px;margin:0;padding:0;line-height:1.4">example@gmail.com</a>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    <table width="100%" align="center" role="presentation" cellSpacing="0" cellPadding="0"
                                       border="0">
                                       <tbody style="width:100%">
                                          <tr style="width:100%">
                                             <td
                                                style="padding-left:20px;border-style:solid;border-color:white;border-width:0px 1px 1px 0px;height:44px">
                                                <p
                                                   style="font-size:10px;line-height:1.4;margin:0;padding:0;color:rgb(102,102,102)">
                                                   INVOICE DATE</p>
                                                <p style="font-size:12px;line-height:1.4;margin:0;padding:0">18 Jan 2023</p>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    <table width="100%" align="center" role="presentation" cellSpacing="0" cellPadding="0"
                                       border="0">
                                       <tbody style="width:100%">
                                          <tr style="width:100%">
                                             <td
                                                style="padding-left:20px;border-style:solid;border-color:white;border-width:0px 1px 1px 0px;height:44px">
                                                <p
                                                   style="font-size:10px;line-height:1.4;margin:0;padding:0;color:rgb(102,102,102)">
                                                   Product Due</p><a target="_blank"
                                                   style="color:#15c;text-decoration:underline;font-size:12px;margin:0;padding:0;line-height:1.4">in 3 Days</a>
                                             </td>
                                             <td
                                                style="padding-left:20px;border-style:solid;border-color:white;border-width:0px 1px 1px 0px;height:44px">
                                                <p
                                                   style="font-size:10px;line-height:1.4;margin:0;padding:0;color:rgb(102,102,102)">
                                                   PRODUCT NAME</p>
                                                <p style="font-size:12px;line-height:1.4;margin:0;padding:0">Parking Space</p>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                                 <td colSpan="2"
                                    style="padding-left:20px;border-style:solid;border-color:white;border-width:0px 1px 1px 0px;height:44px">
                                    <p style="font-size:10px;line-height:1.4;margin:0;padding:0;color:rgb(102,102,102)">BILLED TO
                                    </p>
                                    <p style="font-size:12px;line-height:1.4;margin:0;padding:0">Username</p>
                                    <p style="font-size:12px;line-height:1.4;margin:0;padding:0">Address</p>
                                    <p style="font-size:12px;line-height:1.4;margin:0;padding:0">INDONESIA</p>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
                </tbody>
                </table>
                <hr style="width:100%;border:none;border-top:1px solid #eaeaea;margin:30px 0 0 0" />
                
                <hr style="width:100%;border:none;border-top:1px solid #eaeaea;margin:0 0 75px 0" />
                <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                     <td>
                     <td align="center" style="display:block"><img alt="Parkir Sini Logo"
                           src="https://i.ibb.co/jL6JKcb/fp-logo.png" width="200" height="70"
                           style="display:block;outline:none;border:none;text-decoration:none" /></td>
                     </td>
                  </tr>
                </tbody>
                </table>
                <hr style="width:100%;border:none;border-top:1px solid #eaeaea;margin:65px 0 20px 0" />
                <p style="font-size:12px;line-height:24px;margin:8px 0 0 0;text-align:center;color:rgb(102,102,102)"><a
                  target="_blank" style="color:#067df7;text-decoration:none" href="#">Account Settings</a> • <a target="_blank"
                  style="color:#067df7;text-decoration:none" href="#">Terms of Sale</a> • <a target="_blank"
                  style="color:#067df7;text-decoration:none" href="#">Privacy Policy </a></p>
                <p style="font-size:12px;line-height:24px;margin:25px 0 0 0;text-align:center;color:rgb(102,102,102)">Copyright ©
                2023 Parkir Sini Inc. <br /> <a target="_blank" style="color:#067df7;text-decoration:none" href="#">All rights
                  reserved</a></p>
                </td>
                </tr>
                </table>
                </body>
                
                </html>`
               })
               booking.duration -= 1;
            } else if (booking.duration > 0 && booking.paid === true) {
               booking.duration -= 1;
            }
            await booking.save();
            console.log("Updated booking:", booking);
         }
      } catch (error) {
         console.error("Error updating bookings:", error);
      }
   },
   null,
   true,
   "Asia/Jakarta"
);

module.exports = job;