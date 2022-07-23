const mongoose = require('mongoose');
const guitarSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  insertedAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("guitar", guitarSchema);
