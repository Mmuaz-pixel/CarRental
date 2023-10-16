const express = require('express')
const router = express.Router

router.post('/addlisting', (req, res)=>{
    const {name, owner, availability, model, make, engineCapacity, mileage, region, rent, driver, car_number, duration} = req.body; 


})

module.exports = router; 