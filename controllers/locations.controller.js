/**
 * Location model
 * @module Location
 */
const Location = require('../models/Location')

/**
 * Location Controller Object
 * @type {Object}
 */
const locationsController = {}

/**
 * show Location collection
 * @method getLocations
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
locationsController.getLocations = async (req, res) => {
  let allLocations = await Location.find()
  res.json(allLocations)
}

/**
 * Create a new Location
 * @method createLocation
 * @param  {object}   req request
 * @param  {object}   res response
 * @return {Promise}
 */
locationsController.createLocation = async (req, res) => {
  try {
    let newLocation = await new Location(req.body)
    await newLocation.save()
    res.json({status: 'Created successfully', object: newLocation})
  } catch (e) {
    res.json({status: 'Error Creating', error: e})
  }
}

/**
 * Show a Location
 * @method getLocation
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
locationsController.getLocation = async (req, res) => {
  let seeLocation = await Location.findById(req.params.id)
  res.json(seeLocation)
}

/**
 * Update a Location
 * @method updateLocation
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
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

/**
 * delete a Location
 * @method deleteLocation
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
locationsController.deleteLocation = async (req, res) => {
  await Location.findByIdAndDelete(req.params.id)
  res.json({status: 'Deleted successfully'})
}

/**
 * Export the Location controller
 * @type {object}
 */
module.exports = locationsController
