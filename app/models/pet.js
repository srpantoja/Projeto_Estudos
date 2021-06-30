const mongoose = require('mongoose')
module.exports = function () {
    const schema = mongoose.Schema(
        {
            clientId: {
                type: mongoose.Schema.ObjectId,
                ref: 'Client'
            },
            name: {
                type: String,
                required: true
            },
            species: {
                type: String,
                required: true
            },
            breed: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                required: true
            },
            lastDeworming: {
                type: Date,
                required: true
            },
            lastVaccination: {
                type: Date,
                required: true
            },
            clinicalObservations: {
                type: String,
                required: false
            }
        }
    )
    return mongoose.model('pet', schema);
}()