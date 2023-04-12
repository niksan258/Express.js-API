const {Router} = require('express');
const controller  = require('./controller');
const { validateApiKey } = require('./validateApiKey');


const router = Router();

router.post("/", validateApiKey , (req, res) => {
    controller.addSensorMeasurement(req,res);
}); 

module.exports = router;    