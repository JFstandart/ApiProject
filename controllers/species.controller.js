/**
 * Species model
 * @module Species
 */
const Species = require('../models/Species')

/**
 * Species Controller Object
 * @type {Object}
 */
const speciesController = {}

/**
 * show Species collection
 * @method getAllSpecies
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
speciesController.getAllSpecies = async (req, res) => {
  let AllSpecies = await Species.find()
  res.json(AllSpecies)
}

/**
 * Create a new Species
 * @method createSpecies
 * @param  {object}   req request
 * @param  {object}   res response
 * @return {Promise}
 */
speciesController.createSpecies = async (req, res) => {
  try {
      let newSpecies = await new Species(req.body)
      await newSpecies.save()
      res.json({status: 'Created successfully', object: newSpecies})
    } catch (e) {
      res.json({status: 'Error Creating', error: e})
    }
  }

  /**
   * Show a Species
   * @method getSpecies
   * @param  {object}  req request
   * @param  {object}  res response
   * @return {Promise}
   */
speciesController.getSpecies = async (req, res) => {
  let OneSpecies = await Species.findById(req.params.id)
  res.json(OneSpecies)
}

/**
 * Update Species
 * @method updateSpecies
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
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

/**
 * Delete Species
 * @method deleteSpecies
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
speciesController.deleteSpecies = async (req, res) => {
  await Species.findByIdAndDelete(req.params.id)
  res.json({status: 'Deleted successfully'})
}

/**
 * Export the Species controller
 * @type {object}
 */
module.exports = speciesController
