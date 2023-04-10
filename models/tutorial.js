const mongoose = require('mongoose')

const tutorialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

tutorialSchema.pre('validate', function(next) {
    next()
})

module.exports = mongoose.model('Tutorial', tutorialSchema)