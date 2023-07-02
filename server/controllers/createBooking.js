const { Booking, Landlord } = require("../models");
const midtransClient = require('midtrans-client');
const { sequelize } = require("../models")

class CreateBooking {
   static async generateMidtransToken(req, res, next) {
      try {
         const { amount } = req.body
         // const { id } = req.user
         // let findUser = await User.findByPk(id)
         let snap = new midtransClient.Snap({
            isProduction: false,
            serverKey: process.env.MIDTRANS_KEY
         });
         let parameter = {
            "transaction_details": {
               "order_id": Math.floor(Math.random() * 1000000 + 1000000),
               "gross_amount": amount
            },
            "credit_card": {
               "secure": true
            },
            // user email masih di-hardcode
            "customer_details": {
               "email": "user@gmail.com", // findUser.email
            }
         };
         const midtransToken = await snap.createTransaction(parameter)
         res.status(201).json(midtransToken)
      } catch (error) {
         next(error)
      }
   }

   static async createBookingAmount(req, res, next) {
      const t = await sequelize.transaction();
      try {
         const { amount, email, parkingSpaceId, price } = req.body
         // customerId, paid status, dan duration masih di-hardcode
         const booking = await Booking.create({
            parkingSpaceId,
            customerId: 1,
            paid: true,
            duration: 30,
            price
         }, { transaction: t })
         await Landlord.increment('amount', {
            by: amount,
            where: { email }
         }, { transaction: t })
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