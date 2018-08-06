const mongoose = require('mongoose')
const {Schema} = mongoose

const SpeciesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  classification: {
    type: String,
    required: true
  },
  eye_color: {
    type: String,
    required: true
  },
  hair_color: {
    type: String,
    required: true
  },
  people: {
    type: Array,
    required: true
  },
  films: {
    type: Array,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Species', SpeciesSchema)
