const Vehicle = require('../models/Vehicle')

const vehiclesController = {}

vehiclesController.getVehicles = async (req, res) => {
  let allVehicles = await Vehicle.find()
  res.json(allVehicles)
}

vehiclesController.createVehicle = async (req, res) => {
  try {
      let newVehicle = await new Vehicle(req.body)
      await newVehicle.save()
      res.json({status: 'Created successfully', object: newVehicle})
    } catch (e) {
      res.json({status: 'Error Creating', error: e})
    }
  }


vehiclesController.getVehicle = async (req, res) => {
  let seeVehicle = await Vehicle.findById(req.params.id)
  res.json(seeVehicle)
}

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

vehiclesController.deleteVehicle = async (req, res) => {
  await Vehicle.findByIdAndDelete(req.params.id)
  res.json({status: 'Deleted successfully'})
}

module.exports = vehiclesController
