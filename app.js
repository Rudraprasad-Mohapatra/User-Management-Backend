require("dotenv").config();
const express = require("express");
const databaseConnect = require("./config/databaseConfig.js");
const userRoute = require("./router/userRoutes.js");
const app = express();

databaseConnect();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use("/",userRoute);

module.exports = app;