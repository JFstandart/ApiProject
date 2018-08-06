const mongoose = require('mongoose')
const {Schema} = mongoose

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
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Vehicle', VehicleSchema)
