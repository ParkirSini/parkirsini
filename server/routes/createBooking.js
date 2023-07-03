const router = require("express").Router()
const Controller = require("../controllers/createBooking")

router
   .post("/generate-midtrans", Controller.generateMidtransToken)
   .post("/create-booking", Controller.createBookingAmount)

module.exports = router