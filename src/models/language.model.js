const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema(
  {
    english: {
      type: String,
      required: true,
    },
    ibibio: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Language = mongoose.model('Language', languageSchema);

module.exports = Language;
