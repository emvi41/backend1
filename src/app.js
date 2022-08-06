"use strict";

const express = require("express");
const app = express();

const indexRouter = require("./routes/home/indexRouter");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", indexRouter);

module.exports = app;