const express = require('express')
const locations = express.Router()
const locationsController = require('../controllers/locations.controller')

locations.get('/', locationsController.getLocations)
locations.post('/', locationsController.createLocation)
locations.get('/:id', locationsController.getLocation)
locations.put('/:id', locationsController.updateLocation)
locations.delete('/:id', locationsController.deleteLocation)

module.exports = locations
