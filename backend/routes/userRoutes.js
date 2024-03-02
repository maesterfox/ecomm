const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  registerUser,
  getUserProfile,
} = require("../controllers/userController");

// Existing registration route
router.post(
  "/register",
  [
    body("username").not().isEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Provide a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  registerUser
);

// New profile route
router.get("/profile", auth, getUserProfile);

module.exports = router;
