const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    timeOut: {
        type: Date,
        default: -1
    }
})

accountSchema.pre('validate', function(next) {
    next()
})

module.exports = mongoose.model('Account', accountSchema)