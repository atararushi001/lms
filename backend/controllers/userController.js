const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel"); 
exports.registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      userName: req.body.username,
      password: hashedPassword,
      Role: "User",
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);

    if (error.name === "SequelizeValidationError") {
      // Handle Sequelize validation errors
      const validationErrors = error.errors.map((err) => ({
        field: err.path,
        message: err.message,
      }));
      res.status(400).json({ errors: validationErrors });
    } else if (error.name == "Email already exists") {
      error.message = "Email already exists";
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

exports.loginuser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    } else {
      const ispassword = await bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!ispassword) {
        return res.status(401).json({ message: "Invalid email or password" });
      } else {
        const token = jwt.sign(
          { email: user.email, userId: user.id },
          "secret_this_should_be_longer",
          { expiresIn: "1h" }
        );
        res
          .status(200)
          .json({ token: token, expiresIn: 3600, userId: user.id, message: "User logged in successfully" });
      }
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Failed to login user" });
  }
};
