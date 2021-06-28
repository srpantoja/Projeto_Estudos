const mongoose = require('mongoose')
module.exports = function(){
    const schema = mongoose.Schema(
        {
            idClient: {
                type: mongoose.Schema.ObjectId,
                ref: 'Client'
            },
            idPet: {
                type: mongoose.Schema.ObjectId,
                ref: 'Pet'
            }, 
            idService: {
                type: mongoose.Schema.ObjectId,
                ref: 'Service'
            } ,
            idProduct : {
                type: mongoose.Schema.ObjectId,
                ref: 'Product',
                required: false
            },
            date: {
                type: Date,
                required: true
            }
        }
    )
    return mongoose.model('Query', schema);
}()