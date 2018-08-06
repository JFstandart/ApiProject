const express = require('express')
const film = express.Router()
const filmsController = require('../controllers/films.controller')

film.get('/', filmsController.getFilms)
film.post('/', filmsController.createFilm)
film.get('/:id', filmsController.getFilm)
film.put('/:id', filmsController.updateFilm)
film.delete('/:id', filmsController.deleteFilm)

module.exports = film
