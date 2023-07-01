const router = require("express").Router();
const Controller = require("../controllers/index");
const reviewRouter = require('./reviewRouter')

router.get("/", Controller.home);
router.use('/review', reviewRouter)

module.exports = router;