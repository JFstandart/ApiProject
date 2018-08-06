/**
 * mongodb ORM
 * @module mongoose
 */
const mongoose = require('mongoose')

/**
 * Vehicle collection structure
 * @type {Schema}
 */
const {Schema} = mongoose

/**
 * Vehicle collection structure
 * @type {Schema}
 */
const VehicleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  vehicle_class: {
    type: String,
    required: true
  },
  length: {
    type: String,
    required: true
  },
  pilot: {
    type: String,
    required: true
  },
  films: {
    type: Array
  },
  url: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Vehicle', VehicleSchema)
