const Flight = require("../models/flight");

module.exports = {
  flightsIndex,
  new: newFlight,
  createFlight,
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
  const newFlight = new Flight();
  const dt = newFlight.departs;
  const departsDate = dt.toISOString().slice(0, 16);
  res.render("flights/new", { departsDate });
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.render("flights/new");
    res.redirect("/flights");
  });
}
