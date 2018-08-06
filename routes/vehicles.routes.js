const express = require('express')
const router = express.Router()
const vehiclesController = require('../controllers/vehicles.controller')

router.get('vehicles/', vehiclesController.getVehicles)
router.post('vehicles/', vehiclesController.createVehicle)
router.get('vehicles/:id', vehiclesController.getVehicle)
router.put('vehicles/:id', vehiclesController.updateVehicle)
router.delete('vehicles/:id', vehiclesController.deleteVehicle)

module.exports = router
