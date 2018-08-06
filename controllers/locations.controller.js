const Location = require('../models/Location')

const locationsController = {}

locationsController.getLocations = async (req, res) => {
  let allLocations = await Location.find()
  res.json(allLocations)
}

locationsController.createLocation = async (req, res) => {
  try {
    let newLocation = await new Location(req.body)
    await newLocation.save()
    res.json({status: 'Created successfully', object: newLocation})
  } catch (e) {
    res.json({status: 'Error Creating', error: e})
  }
}

locationsController.getLocation = async (req, res) => {
  let seeLocation = await Location.findById(req.params.id)
  res.json(seeLocation)
}

locationsController.updateLocation = async (req, res) => {
  let UpdatedLocation = {
    name: req.body.name,
    climate: req.body.climate,
    terrain: req.body.terrain,
    surface_water: req.body.surface_water,
    residents: req.body.residents,
    films: req.body.films,
    url: req.body.url
  }
  await Location.findByIdAndUpdate(req.params.id, {
    $set: UpdatedLocation
  }, {
    upsert: true,
    new: true
  })
  res.json({status: 'Updated successfully'})
}

locationsController.deleteLocation = async (req, res) => {
  await Location.findByIdAndDelete(req.params.id)
  res.json({status: 'Deleted successfully'})
}

module.exports = locationsController
