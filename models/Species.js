/**
 * mongodb ORM
 * @module mongoose
 */
const mongoose = require('mongoose')

/**
 * Species collection structure
 * @type {Schema}
 */
const {Schema} = mongoose

/**
 * Species collection structure
 * @type {Schema}
 */
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
    type: Array
  },
  films: {
    type: Array
  },
  url: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Species', SpeciesSchema)
