const mongoose = require("mongoose");

const sharkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  profession: {
    type: String,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  govtId: {
    type: String,
    required: true,
  },
  // govtIdPhoto:
  // {   data: Buffer,
  //     contentType: String
  // },
  // photo:
  // {   data: Buffer,
  //     contentType: String
  // }
});

const Shark = new mongoose.model("shark", sharkSchema);

module.exports = Shark;
