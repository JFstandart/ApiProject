/**
 * Vehicle model
 * @module Vehicle
 */
const Vehicle = require('../models/Vehicle')

/**
 * Vehicle Controller Object
 * @type {Object}
 */
const vehiclesController = {}

/**
 * show Vehicle collection
 * @method getVehicles
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
vehiclesController.getVehicles = async (req, res) => {
  let allVehicles = await Vehicle.find()
  res.json(allVehicles)
}

/**
 * Create a new Vehicle
 * @method createVehicle
 * @param  {object}   req request
 * @param  {object}   res response
 * @return {Promise}
 */
vehiclesController.createVehicle = async (req, res) => {
  try {
      let newVehicle = await new Vehicle(req.body)
      await newVehicle.save()
      res.json({status: 'Created successfully', object: newVehicle})
    } catch (e) {
      res.json({status: 'Error Creating', error: e})
    }
  }

  /**
   * Show a Vehicle
   * @method getVehicle
   * @param  {object}  req request
   * @param  {object}  res response
   * @return {Promise}
   */
vehiclesController.getVehicle = async (req, res) => {
  let seeVehicle = await Vehicle.findById(req.params.id)
  res.json(seeVehicle)
}

/**
 * Update a Vehicle
 * @method updateVehicle
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
vehiclesController.updateVehicle = async (req, res) => {
  let UpdatedVehicle = {
    name: req.body.name,
    description: req.body.description,
    vehicle_class: req.body.vehicle_class,
    length: req.body.length,
    pilot: req.body.pilot,
    films: req.body.films,
    url: req.body.url
  }
  await Vehicle.findByIdAndUpdate(req.params.id, {
    $set: UpdatedVehicle
  }, {
    upsert: true,
    new: true
  })
  res.json({status: 'Updated successfully'})
}

/**
 * Delete a Vehicle
 * @method deleteVehicle
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
vehiclesController.deleteVehicle = async (req, res) => {
  await Vehicle.findByIdAndDelete(req.params.id)
  res.json({status: 'Deleted successfully'})
}

/**
 * Export the Vehicle controller
 * @type {object}
 */
module.exports = vehiclesController
