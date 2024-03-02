const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

// Add to userController.js

exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({
      username,
      email,
      password: bcrypt.hashSync(password, 10), // Hash password
    });

    await user.save();

    // Generate token (implement in Step 5)
    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Add to userController.js

// @route   GET api/users/profile
// @desc    Get user profile
// @access  Private

exports.getUserProfile = async (req, res) => {
  try {
    // Assuming the user ID is stored in the JWT token and decoded in the auth middleware
    const user = await User.findById(req.user.id).select("-password"); // Exclude the password field
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Add to userController.js

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.changeUserPassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const userId = req.user.id; // Assuming the user's ID is attached to the request object by your auth middleware

  if (!currentPassword || !newPassword) {
    return res
      .status(400)
      .json({ msg: "Please provide both current and new passwords." });
  }

  try {
    const user = await User.findById(userId);

    // Check if the current password is correct
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Current password is incorrect." });
    }

    // Validate the new password (optional step, depending on your requirements)
    // For example, check if the new password is sufficiently complex

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.json({ msg: "Password updated successfully." });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
