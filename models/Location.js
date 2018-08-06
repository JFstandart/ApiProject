/**
 * mongodb ORM
 * @module mongoose
 */
const mongoose = require('mongoose')

/**
 * Location collection structure
 * @type {Schema}
 */
const {Schema} = mongoose

/**
 * Location collection structure
 * @type {Schema}
 */
const LocationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  climate: {
    type: String,
    required: true
  },
  terrain: {
    type: String,
    required: true
  },
  surface_water: {
    type: String,
    required: true
  },
  residents: {
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

module.exports = mongoose.model('Location', LocationSchema)
