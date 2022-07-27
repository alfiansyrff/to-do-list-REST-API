const mongoose = require('mongoose');

const listSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    finished: {
      type: Boolean,
      required: true
    },
    createdAt: {
      type: String,
    },
    updatedAt: {
      type: String
    }
});

module.exports = mongoose.model('List', listSchema)


