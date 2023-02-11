import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the title"],
    maxLength: [100, "You cannot enter more than 100 characters"],
  },
  description: {
    type: String,
    required: [true, "Please enter ther description"],
    maxLenth: [5000, "You cannot enter more than 500 characters"],
  },
  priority: {
    type: String,
    default: "",
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Todo", todoSchema);
