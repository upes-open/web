const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  SAP_ID: {
    type: Number,
    required: true,
  },
  E_Mail: {
    type: String,
    required: true,
    // unique: true,
  },
  Contact_Number: {
    type: Number,
    required: true,
    // unique: true,
  },
  Course: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("testdata", registerSchema);
