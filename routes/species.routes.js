const express = require('express')
const species = express.Router()
const speciesController = require('../controllers/species.controller')

species.get('/', speciesController.getAllSpecies)
species.post('/', speciesController.createSpecies)
species.get('/:id', speciesController.getSpecies)
species.put('/:id', speciesController.updateSpecies)
species.delete('/:id', speciesController.deleteSpecies)

module.exports = species
