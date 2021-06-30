const mongoose = require('mongoose')
module.exports = function(){
    const schema = mongoose.Schema(
        {
            idClient: {
                type: mongoose.Schema.ObjectId,
                ref: 'client'
            },
            idPet: {
                type: mongoose.Schema.ObjectId,
                ref: 'pet'
            }, 
            idService: {
                type: mongoose.Schema.ObjectId,
                ref: 'service'
            } ,
            idProduct : {
                type: mongoose.Schema.ObjectId,
                ref: 'product',
                required: false
            },
            date: {
                type: Date,
                required: true
            }
        }
    )
    return mongoose.model('query', schema);
}()