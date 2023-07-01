const router = require("express").Router();
const Controller = require("../controllers/index");
const ControllerImage = require("../controllers/ImageUpload");
const multer = require('multer')
const { storage, cloudinary } = require("../cloudinary")
const upload = multer({ storage })

router
   .get("/", Controller.home)
   .post("/image", upload.array('image'), ControllerImage.upload);

module.exports = router;