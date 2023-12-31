const express = require('express');
const Listing = require('../Models/listingModel');
const Booked = require('../Models/Booked');
const router = express.Router(); 

router.get('/getListings', async(req, res)=>
{
    const BookedCars = await Booked.find(); 
    const ids = BookedCars.map((car) => car._id); 
    const listings = await Listing.find(); 
    const availableCars = listings.filter((car) => !ids.includes(car._id)); 
    res.json(availableCars); 
}) 

module.exports = router; 