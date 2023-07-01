const router = require("express").Router();
const Controller = require("../controllers/index");
const adminRouter = require("./adminRouter");

router.get("/", Controller.home);

router.use("/admin", adminRouter);

module.exports = router;
