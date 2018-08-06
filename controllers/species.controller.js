const Species = require('../models/Species')

const speciesController = {}

speciesController.getAllSpecies = async (req, res) => {
  let AllSpecies = await Species.find()
  res.json(AllSpecies)
}

speciesController.createSpecies = async (req, res) => {
  try {
      let newSpecies = await new Species(req.body)
      await newSpecies.save()
      res.json({status: 'Created successfully', object: newSpecies})
    } catch (e) {
      res.json({status: 'Error Creating', error: e})
    }
  }


speciesController.getSpecies = async (req, res) => {
  let OneSpecies = await Species.findById(req.params.id)
  res.json(OneSpecies)
}

speciesController.updateSpecies = async (req, res) => {
  let UpdatedSpecies = {
    name: req.body.name,
    classification: req.body.classification,
    eye_color: req.body.eye_color,
    hair_color: req.body.hair_color,
    people: req.body.people,
    films: req.body.films,
    url: req.body.url
  }
  await Species.findByIdAndUpdate(req.params.id, {
    $set: UpdatedSpecies
  }, {
    upsert: true,
    new: true
  })
  res.json({status: 'Updated successfully'})
}

speciesController.deleteSpecies = async (req, res) => {
  await Species.findByIdAndDelete(req.params.id)
  res.json({status: 'Deleted successfully'})
}

module.exports = speciesController
