const mongoose = require("mongoose")

const explanationSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  language: {
    type: String
  },
  explanation: {
    type: String
  },
  complexity: {
    type: String
  }
},{
  timestamps: true
})

module.exports = mongoose.model("Explanation", explanationSchema)