const express = require('express')
const Listing = require('../Models/listingModel')
const Booked = require('../Models/booked')
const User = require('../Models/user')
const router = express.Router(); 


router.post('/addbooking', async(req, res)=>{
    const {car, owner, user} = req.body; 

    const booking = await Booked.create({
        car, owner, user
    })
    
    res.json(booking);
})


router.delete('/removebooking', async(req, res)=>{
    const {id} = req.body; 
    const booking = await Booked.findByIdAndDelete(id)
    res.json(booking);
})

module.exports = router; 