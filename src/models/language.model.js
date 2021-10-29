const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema(
  {
    english: {
      type: String,
      required: true,
    },
    ibibio: {
      type: String,
    },
    ijaw: {
      type: String,
    },
    igbo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Language = mongoose.model('Language', languageSchema);

module.exports = Language;
