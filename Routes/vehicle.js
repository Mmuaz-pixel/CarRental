const express = require('express')
const Listing = require('../Models/listingModel')
const Booked = require('../Models/booked')
const router = express.Router(); 

router.get('/getListings', async(req, res)=>{
//all listings
    const BookedCars = await Booked.find(); 
    const ids = BookedCars.map((car) => car._id);
    const listings = await Listing.find(); 
    const availableCars = listings.filter((car) => !ids.includes(car._id));
    res.json(availableCars); //limit 
})

module.exports = router; 