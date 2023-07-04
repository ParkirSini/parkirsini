const { Booking, Landlord, Customer } = require("../models");
const midtransClient = require('midtrans-client');
const { sequelize } = require("../models");
const SibApiV3Sdk = require('sib-api-v3-sdk')
const defaultClient = SibApiV3Sdk.ApiClient.instance
const apiKey = defaultClient.authentications['api-key']
const { generateHTML } = require("../helpers/emailHtmlContent")

class CreateBooking {
   static async generateMidtransToken(req, res, next) {
      try {
         console.log("masukk")
         const { amount } = req.body
         const { id } = req.user
         let findUser = await Customer.findByPk(id)
         let snap = new midtransClient.Snap({
            isProduction: false,
            serverKey: process.env.MIDTRANS_KEY
         });
         let parameter = {
            transaction_details: {
               order_id: Math.floor(Math.random() * 1000000 + 1000000),
               gross_amount: amount
            },
            credit_card: {
               secure: true
            },
            customer_details: {
               email: findUser.email
            }
         };
         const midtransToken = await snap.createTransaction(parameter)
         console.log(midtransToken, "<<<<<<<<<<<<<<<");
         res.status(201).json(midtransToken)
      } catch (error) {
         next(error)
      }
   }

   static async createBookingAmount(req, res, next) {
      const t = await sequelize.transaction();
      try {
         const { id } = req.user
         const { amount, email, parkingSpaceId, price } = req.body
         let findUser = await Customer.findByPk(id)
         const booking = await Booking.create({
            parkingSpaceId,
            customerId: id,
            paid: true,
            duration: 30,
            price
         }, { transaction: t })
         await Landlord.increment('amount', {
            by: amount,
            where: { email }
         }, { transaction: t })
         apiKey.apiKey = process.env.SENDINBLUE_KEY
         const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
         const sender = {
            email: "parkirsini@gmail.com",
            name: "Parkir Sini"
         }
         const receivers = [
            {
               email: findUser.email
            }
         ]
         let date = new Date().toISOString().slice(0, 10)
         const sendEmail = await apiInstance.sendTransacEmail({
            sender,
            to: receivers,
            subject: "Payment Receipt",
            htmlContent: generateHTML(amount, findUser.email, date)
         })
         await t.commit()
         res.status(201).json({ message: 'Successfully added a new booking' })
      } catch (error) {
         await t.rollback()
         console.log(error)
         next(error)
      }
   }
}

module.exports = CreateBooking