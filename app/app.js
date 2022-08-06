"use strict";

const express = require("express");
const app = express();

const indexRouter = require("./src/routes/home/indexRouter");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", indexRouter);

module.exports = app;