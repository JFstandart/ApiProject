const express = require('express')
const router = express.Router()
const locationsController = require('../controllers/locations.controller')

router.get('locations/', locationsController.getLocations)
router.post('locations/', locationsController.createLocation)
router.get('locations/:id', locationsController.getLocation)
router.put('locations/:id', locationsController.updateLocation)
router.delete('locations/:id', locationsController.deleteLocation)

module.exports = router
