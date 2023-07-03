const router = require("express").Router();
const Controller = require("../controllers/index");
const reviewRouter = require('./reviewRouter')
const ControllerImage = require("../controllers/ImageUpload");
const multer = require('multer')
const { storage, cloudinary } = require("../cloudinary")
const upload = multer({ storage })
const errorHandler = require("../middlewares/errorHandler");
const customerRouter = require("./customer")
const landlordRouter = require("./landlord")
const parkingSpaceRouter = require('./parkingSpaceRouter');

router
   .get("/", Controller.home)
   .post("/image", upload.array('image'), ControllerImage.upload)
   .use("/pub", customerRouter)
   .use("/owner", landlordRouter)
   .use(errorHandler);
router.get("/", Controller.home);
router.use('/review', reviewRouter)
router.use("/pub", customerRouter)
router.use("/owner", landlordRouter)
router.use(parkingSpaceRouter)

router.use(errorHandler);

module.exports = router;