const mongoose = require("mongoose");

const epSchema = new mongoose.Schema({
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
  amount: {
    type: Number,
    required: true,
  },
  equity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
  profit: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  govtId: {
    type: Number,
    required: true,
  },
  // govtIdPhoto:
  // {   data: Buffer,
  //     contentType: String
  // },
  // photo:
  // {   data: Buffer,
  //     contentType: String
  // },
  plans: { 
    type: String,
    required: true
 }
});

const Ep = new mongoose.model("Ep", epSchema);

module.exports = Ep;
