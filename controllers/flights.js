const Flight = require("../models/flight");

module.exports = {
  flightsIndex,
  new: newFlight,
  createFlight,
  show,
};

function flightsIndex(req, res) {
  Flight.find({}, function (err, allFlights) {
    res.render("flights/index", { flights: allFlights });
  });
}

function newFlight(req, res) {
  res.render("flights/new");
}

function createFlight(req, res) {
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.render("flights/new");
    res.redirect("/flights");
  });
}

// function to show a details on a given flight
function show(req, res) {
  Flight.findById(req.params.id, function (err, currentFlight) {
    res.render("flights/show", { flight: currentFlight });
  });
}
