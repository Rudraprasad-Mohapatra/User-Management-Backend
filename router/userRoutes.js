const express = require("express");
const userRoute = express.Router();
const { register, login } = require("../controller/userController.js");
const validateRegistrationFields = require("../middleware/registrationMiddleware.js");
const loginMiddleware = require("../middleware/loginMiddleware.js")
userRoute.post("/register", validateRegistrationFields, register);
userRoute.post("/login", loginMiddleware, login);

module.exports = userRoute;