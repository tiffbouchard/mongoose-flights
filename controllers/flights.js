const Flight = require('../models/flight');

module.exports = {
  index,
  new: newSkill,
};

function index(req, res) {
  res.render('flights/index')
  Flight.getAll()
}

function newSkill(req, res) {
  res.render('flights/new');
}