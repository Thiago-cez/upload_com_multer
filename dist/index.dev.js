"use strict";

var express = require("express");

var app = express();

var multer = require("multer");

var _require = require("path"),
    extname = _require.extname;

var path = require("path");

app.set('view engine', 'ejs');
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function filename(req, file, cb) {
    cb(null, file.originalname + Date.now() + path.extname(file.originalname));
  }
});
var upload = multer({
  storage: storage
});
app.get("/", function (req, res) {
  res.render("index");
});
app.post("/upload", upload.single("file"), function (req, res) {
  res.send("arquivo recebido");
});
app.listen(3452, function () {
  console.log("SERVIDOR RODANDO!");
});