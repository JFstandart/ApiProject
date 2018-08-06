/**
 * People model
 * @module People
 */
const People = require('../models/People')

/**
 * People Controller Object
 * @type {Object}
 */
const peopleController = {}

/**
 * show People collection
 * @method getAllPeople
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
peopleController.getAllPeople = async (req, res) => {
  let AllPeople = await People.find()
  res.json(AllPeople)
}

/**
 * Create a new People
 * @method createPeople
 * @param  {object}   req request
 * @param  {object}   res response
 * @return {Promise}
 */
peopleController.createPeople = async (req, res) => {
  try {
    let newPeople = await new People(req.body)
    await newPeople.save()
    res.json({status: 'Created successfully', object: newPeople})
  } catch (e) {
    res.json({status: 'Error Creating', error: e})
  }
}

/**
   * Show People
   * @method getPeople
   * @param  {object}  req request
   * @param  {object}  res response
   * @return {Promise}
   */
peopleController.getPeople = async (req, res) => {
  let OnePeople = await People.findById(req.params.id)
  res.json(OnePeople)
}

/**
 * Update People
 * @method updatePeople
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
peopleController.updatePeople = async (req, res) => {
  let UpdatedPeople = {
    name: req.body.name,
    description: req.body.description,
    director: req.body.director,
    producer: req.body.producer,
    release_data: req.body.release_data,
    rt_score: req.body.rt_score,
    people: req.body.people,
    species: req.body.species,
    locations: req.body.locations,
    url: req.body.url
  }
  await People.findByIdAndUpdate(req.params.id, {
    $set: UpdatedPeople
  }, {
    upsert: true,
    new: true
  })
  res.json({status: 'Updated successfully'})
}

/**
 * Delete People
 * @method deletePeople
 * @param  {object}  req request
 * @param  {object}  res response
 * @return {Promise}
 */
peopleController.deletePeople = async (req, res) => {
  await People.findByIdAndDelete(req.params.id)
  res.json({status: 'Deleted successfully'})
}

/**
 * Export the People controller
 * @type {object}
 */
module.exports = peopleController
