const router = require("express").Router();
const Auth = require("../controllers/admin-auth");
const Admin = require("../controllers/admin");
const { authenticationAdmin } = require("../middlewares/authentication");

router.post("/login", Auth.login);
router.post("/register", Auth.register);

router.use(authenticationAdmin);

router.get("/parking-space", Admin.fetchParkingSpace);
router.get("/parking-space/:id", Admin.fetchParkingSpaceDetail);
router.post("/parking-space", Admin.createParkingSpace);
router.put("/parking-space", Admin.editParkingSpace);
router.delete("/parking-space/:id", Admin.deleteParkingSpace);

router.get("/parking-space-image", Admin.fetchParkingSpaceImages);
router.get("/parking-space-image/:id", Admin.fetchOneParkingSpaceImage);

module.exports = router;
