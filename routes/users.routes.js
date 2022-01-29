const router = require("express").Router();
const UserCtrl = require("../controllers/users.controller");

router.post("/register", UserCtrl.apiCreateUser);
router.post("/login", UserCtrl.apiLoginUser);

module.exports = router;
