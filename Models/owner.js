const mongoose = require('mongoose')
const {Schema} = mongoose

const ownerSchema = new Schema({
    name: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true, 
    }, 
    address: {
        type: String, 
    }, 
    phoneNumber: {
        type: String, 
        required: true, 
        unique: true
    }, 
    cnic: {
        type: String, 
        required: true, 
        unique: true   
    }, 
    age: {
        type: Number, 
        required: true
    }
})

module.exports = mongoose.model('owner', ownerSchema); 