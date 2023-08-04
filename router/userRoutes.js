const express = require("express");
const userRoute = express.Router();
const { register, login } = require("../controller/userController.js");
const validateRegistrationFields = require("../middleware/registrationMiddleware.js");
userRoute.post("/register", validateRegistrationFields, register);
userRoute.post("/login", login);

module.exports = userRoute;