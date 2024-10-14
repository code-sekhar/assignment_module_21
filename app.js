const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const app = new express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/", (req, res) => {
    res.status(200).send({
        message: "Welcome to assignment module 21",
        success: true,
        status: 200
    });
});
module.exports = app;