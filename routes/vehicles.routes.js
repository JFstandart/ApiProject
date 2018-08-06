const express = require('express')
const vehicles = express.Router()
const vehiclesController = require('../controllers/vehicles.controller')

vehicles.get('/', vehiclesController.getVehicles)
vehicles.post('/', vehiclesController.createVehicle)
vehicles.get('/:id', vehiclesController.getVehicle)
vehicles.put('/:id', vehiclesController.updateVehicle)
vehicles.delete('/:id', vehiclesController.deleteVehicle)

module.exports = vehicles
