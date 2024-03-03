const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  loginUser,
  registerUser,
  getUserProfile,
} = require("../controllers/userController");

// Middleware to return validation errors
const returnValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next(); // proceed to the next middleware/controller if no errors
};

router.post(
  "/register",
  [
    body("username").not().isEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Provide a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  returnValidationErrors, // Add this middleware before your controller
  registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Provide a valid email"),
    body("password").not().isEmpty().withMessage("Password is required"),
  ],
  returnValidationErrors,
  loginUser
);

router.get("/profile", auth, getUserProfile);

module.exports = router;
