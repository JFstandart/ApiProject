/**
 * Film model
 * @module Film
 */
const Film = require('../models/Film')

/**
 * Film Controller Object
 * @type {Object}
 */
const filmsController = {}

/**
 * show Film collection
 * @method getFilms
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
filmsController.getFilms = async (req, res) => {
  let allFilms = await Film.find()
  res.json(allFilms)
}

/**
 * Create a new Film
 * @method createFilm
 * @param  {object}   req request
 * @param  {object}   res response
 * @return {Promise}
 */
filmsController.createFilm = async (req, res) => {
  try {
    let newFilm = await new Film(req.body)
    await newFilm.save()
    res.json({status: 'Created successfully', object: newFilm})
  } catch (e) {
    res.json({status: 'Error Creating', error: e})
  }
}

/**
 * Show a Film
 * @method getFilm
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
filmsController.getFilm = async (req, res) => {
  try {
    let SeeFilm = await Film.findById(req.params.id)
    res.json(SeeFilm)
  } catch (e) {
    res.json({status: 'Error', error: e})
  }
}

/**
 * Update a Film
 * @method updateFilm
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
filmsController.updateFilm = async (req, res) => {
  let UpdatedFilm = {
    name: req.body.name,
    description: req.body.description,
    director: req.body.director,
    producer: req.body.producer,
    release_data: req.body.release_data,
    rt_score: req.body.rt_score,
    people: req.body.people,
    species: req.body.species,
    locations: req.body.locations,
    url: req.body.url
  }
  await Film.findByIdAndUpdate(req.params.id, {
    $set: UpdatedFilm
  }, {
    upsert: true,
    new: true
  })
  res.json({status: 'Updated successfully'})
}

/**
 * Delete a Film
 * @method deleteFilm
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
filmsController.deleteFilm = async (req, res) => {
  await Film.findByIdAndDelete(req.params.id)
  res.json({status: 'Deleted successfully'})
}

/**
 * Export the Film controller
 * @type {object}
 */
module.exports = filmsController
