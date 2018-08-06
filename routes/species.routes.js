const express = require('express')
const router = express.Router()
const speciesController = require('../controllers/species.controller')

router.get('species/', speciesController.getAllSpecies)
router.post('species/', speciesController.createSpecies)
router.get('species/:id', speciesController.getSpecies)
router.put('species/:id', speciesController.updateSpecies)
router.delete('species/:id', speciesController.deleteSpecies)

module.exports = router
