const Film = require('../models/Film')

const filmsController = {}

filmsController.getFilms = async (req, res) => {
  let allFilms = await Film.find()
  res.json(allFilms)
}

filmsController.createFilm = async (req, res) => {
  try {
    let newFilm = await new Film(req.body)
    await newFilm.save()
    res.json({status: 'Created successfully', object: newFilm})
  } catch (e) {
    res.json({status: 'Error Creating', error: e})
  }
}

filmsController.getFilm = async (req, res) => {
  let SeeFilm = await Film.findById(req.params.id)
  res.json(SeeFilm)
}

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

filmsController.deleteFilm = async (req, res) => {
  await Film.findByIdAndDelete(req.params.id)
  res.json({status: 'Deleted successfully'})
}

module.exports = filmsController
