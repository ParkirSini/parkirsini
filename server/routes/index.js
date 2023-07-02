const router = require("express").Router();
const Controller = require("../controllers/index");
const ControllerImage = require("../controllers/ImageUpload");
const multer = require("multer");
const { storage, cloudinary } = require("../cloudinary");
const upload = multer({ storage });
const errorHandler = require("../middlewares/errorHandler");

const adminRouter = require("./adminRouter");
const reviewRouter = require("./reviewRouter");
const customerRouter = require("./customer");
const landlordRouter = require("./landlord");
const bookingRouter = require("./createBooking")

router
  .get("/", Controller.home)
  .use("/review", reviewRouter)
  .post("/image", upload.array("image"), ControllerImage.upload)
  .use("/pub", customerRouter)
  .use("/owner", landlordRouter)
  .use("/admin", adminRouter)
  .use("/booking", bookingRouter)
  .use(errorHandler);

module.exports = router;
