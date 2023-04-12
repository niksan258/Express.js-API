const pool = require('../../db')
const queries = require('./queries');

const addSensorMeasurement = (req,res) => {

  const json = req.body;

  const mac = json["device_mac"];
  const weight = json["HX711_WEIGHT"];
  const temp = json["DHT21_TEMP_HUMIDITY"]["temperature"];
  const humidity = json["DHT21_TEMP_HUMIDITY"]["humidity"];


  pool.query(queries.addSensorMeasurement,[parseFloat(temp), mac, "temp", new Date(Date.now()).toISOString() ] )
  pool.query(queries.addSensorMeasurement,[parseFloat(weight), mac, "weight", new Date(Date.now()).toISOString()] )
  pool.query(queries.addSensorMeasurement,[parseFloat(humidity), mac, "humid", new Date(Date.now()).toISOString()] )

  console.log("Entry saved successfully.");
  res.send("Success.");

  //TODO: rework so it gets sensor names directly from json
  //      and posts quiries for every json entry

}

module.exports = {
    addSensorMeasurement,
}