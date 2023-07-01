const router = require("express").Router();
const Controller = require("../controllers/index");

router.get("/", Controller.home);

router.use("/admin", require("./admin"));

module.exports = router;
