const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: String, //validation of American, Southwest and United
  airport: { type: String, default: "DEN" }, //default value to DEN validation to enum AUS DFW DEN LAX SAN
  flightNo: Number, //validation required between 10 and 9999
  departs: { type: Date, 
    default: function() {
      return // year created  + 1
    }
  }, //how to return the year plus one
});

function getAll() {
  return flightSchema;
}

module.exports = {
  getAll,
}