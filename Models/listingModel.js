const mongoose = require('mongoose')
const {Schema} = mongoose

const listSchema = new Schema({
    name: {
        type: String, 
        required: true
    }, 

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'owner'
    }, 

    availability: {
        type: Boolean, 
        required: true, 
    }, 

    model: {
        type: Number, 
        required: true
    }, 

    make: {
        type: String, 
        required: true
    }, 

    engineCapacity: {
        type: Number, 
        required: true
    }, 

    mileage: {
        type: String, 
        required: true
    }, 

    region: {
        type: String, 
        required: true
    }, 

    rent: {
        type: String, 
        required: true
    },

    driver: {
        type: Boolean, 
        required: true
    }, 

    car_number: {
        type: String, 
        required: true
    },

    duration:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('listing', listSchema)