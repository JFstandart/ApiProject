/**
 * mongodb ORM
 * @module mongoose
 */
const mongoose = require('mongoose')

/**
 * People collection structure
 * @type {Schema}
 */
const {Schema} = mongoose

/**
 * People collection structure
 * @type {Schema}
 */
const PeopleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  age: {
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
  films: {
    type: Array
  },
  species: {
    type: Array
  },
  url: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('People', PeopleSchema)
