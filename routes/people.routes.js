const express = require('express')
const router = express.Router()
const peopleController = require('../controllers/people.controller')

router.get('people/', peopleController.getAllPeople)
router.post('people/', peopleController.createPeople)
router.get('people/:id', peopleController.getPeople)
router.put('people/:id', peopleController.updatePeople)
router.delete('people/:id', peopleController.deletePeople)

module.exports = router
