const mongoose = require('mongoose')
const {Schema} = mongoose

const bookedSchema = new Schema({
    car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'listing'
    },

    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'owner'
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

})

module.exports = mongoose.model('booked', bookedSchema)