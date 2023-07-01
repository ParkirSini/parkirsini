const router = require("express").Router();
const Auth = require("../controllers/admin-auth");
const Admin = require("../controllers/admin");
const { adminAuthentication } = require("../middlewares/authentication");

router.post("/login", Auth.login);
router.post("/register", Auth.register);

router.use(adminAuthentication);

router.get("/parking-space", Admin.fetchParkingSpace);
router.post("/parking-space", Admin.createParkingSpace);
router.put("/parking-space", Admin.editParkingSpace);
router.delete("/parking-space/:id", Admin.deleteParkingSpace);

module.exports = router;
