const router = require("express").Router();
const mongoose = require("mongoose");

const Image = require("../models/image");

// Get All Images
router.get("/", (req, res, next) => {
  Image.find()
    .select("_id name url")
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// Add Image
router.post("/", (req, res, next) => {
  const image = new Image({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    url: req.body.url,
  });

  image
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Image saved",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// Get Image by ID
router.get("/:imageId", (req, res, next) => {
  const id = req.params.imageId;

  Image.findById(id)
    .select("_id name url")
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({
          message: "Image not found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// Delete Image
router.delete("/:imageId", (req, res, next) => {
  const id = req.params.imageId;

  Image.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({ message: "Image deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
