const User = require("../models/user");
const bcrypt = require("bcrypt");

module.exports = class UserCtrl {
  static async apiCreateUser(req, res) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      const savedUser = await newUser.save();
      res.status(200).json(savedUser._id);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  }
  static async apiLoginUser(req, res) {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(400).json("Wrong Username or Password!");
      }

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(400).json("Wrong Username or Password!");
      }

      return res.status(200).json({ _id: user._id, username: user.username });
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  }
};
