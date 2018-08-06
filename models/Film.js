/**
 * mongodb ORM
 * @module mongoose
 */
const mongoose = require('mongoose')

/**
 * Film collection structure
 * @type {Schema}
 */
const {Schema} = mongoose

/**
 * Film collection structure
 * @type {Schema}
 */
const FilmSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  producer: {
    type: String,
    required: true
  },
  release_date: {
    type: Number,
    required: true
  },
  rt_score: {
    type: Number,
    required: true
  },
  people: {
    type: Array
  },
  species: {
    type: Array
  },
  locations: {
    type: Array
  },
  url: {
    type: String
  }
})

module.exports = mongoose.model('Film', FilmSchema)
