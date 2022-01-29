const router = require("express").Router();
const PinCtrl = require("../controllers/pins.controller.js");

router.post("/", PinCtrl.apiCreatePin);
router.get("/", PinCtrl.apiGetPins);

module.exports = router;
