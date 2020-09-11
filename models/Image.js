const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
  photoId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    default: "Untitled",
  },
  tags: {
    type: Array,
    default: [],
  },
  publishedDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Image = mongoose.model("image", ImageSchema);
