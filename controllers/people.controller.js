const People = require('../models/People')

const peopleController = {}

peopleController.getAllPeople = async (req, res) => {
  let AllPeople = await People.find()
  res.json(AllPeople)
}

peopleController.createPeople = async (req, res) => {
  try {
      let newPeople = await new People(req.body)
      await newPeople.save()
      res.json({status: 'Created successfully', object: newPeople})
    } catch (e) {
      res.json({status: 'Error Creating', error: e})
    }
  }

peopleController.getPeople = async (req, res) => {
  let OnePeople = await People.findById(req.params.id)
  res.json(OnePeople)
}

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

peopleController.deletePeople = async (req, res) => {
  await People.findByIdAndDelete(req.params.id)
  res.json({status: 'Deleted successfully'})
}

module.exports = peopleController
