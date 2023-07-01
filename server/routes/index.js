const router = require("express").Router();
const Controller = require("../controllers/index");
const errorHandler = require("../middlewares/errorHandler");
const customerRouter = require("./customer")
const landlordRouter = require("./landlord")

router.get("/", Controller.home);
router.use("/pub", customerRouter)
router.use("/owner", landlordRouter)
router.use(errorHandler);

module.exports = router;