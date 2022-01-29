const Pin = require("../models/pin.js");

module.exports = class PinCtrl {
  static async apiCreatePin(req, res) {
    const newPin = new Pin(req.body);
    try {
      const savedPin = await newPin.save();
      res.status(200).json(savedPin);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  }

  static async apiGetPins(req, res) {
    try {
      const pins = await Pin.find();
      res.status(200).json(pins);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  }
};
