const router = require("express").Router();
const mongoose = require("mongoose");

const Image = require("../models/image");

// Get All Images
router.get("/", (req, res, next) => {
  Image.find()
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
