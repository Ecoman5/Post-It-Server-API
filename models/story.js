const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Story Title is Required"],
  },
  description: {
    type: String,
    required: [true, "Story Description is Required"],
  },
  tag: {
    type: String,
    enum: ["nature", "lifestyle", "sport", "technology", "others"],
    required: [true, "Story tag is Required"],
  },
  image: {
    type: String,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide a user"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Story", storySchema);
