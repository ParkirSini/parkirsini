const router = require("express").Router()
const Controller = require("../controllers/createBooking")
const { authenticationCustomer } = require("../middlewares/authentication")

router
   .post("/generate-midtrans", authenticationCustomer, Controller.generateMidtransToken)
   .post("/create-booking", authenticationCustomer, Controller.createBookingAmount)

module.exports = router