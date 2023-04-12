const addSensorMeasurement = 
"INSERT INTO sensor_records (reading, device_id, sensor_id, recorded_at)"
+ " VALUES ($1, $2, $3, $4)"

//CREATE TABLE sensor_records()

//INSERT INTO 

module.exports = {
    addSensorMeasurement,
}