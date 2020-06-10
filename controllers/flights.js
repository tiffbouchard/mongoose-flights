const Flight = require('../models/flight');

module.exports = {
  index,
  new: newSkill,
};

function index(req, res) {
  res.render('flights/index', { title: 'Mongoose Flights' })
  
}

function newSkill(req, res) {
  res.render('flights/new', { title: 'Mongoose Flights' });
}