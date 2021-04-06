const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  url: { type: String, require: true },
});

module.exports = mongoose.model("Image", imageSchema);
