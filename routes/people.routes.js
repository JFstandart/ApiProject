const express = require('express')
const people = express.Router()
const peopleController = require('../controllers/people.controller')

people.get('/', peopleController.getAllPeople)
people.post('/', peopleController.createPeople)
people.get('/:id', peopleController.getPeople)
people.put('/:id', peopleController.updatePeople)
people.delete('/:id', peopleController.deletePeople)

module.exports = people
