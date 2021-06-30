const mongoose = require('mongoose')
module.exports = function(){
    const schema = mongoose.Schema(
        {
            name: {
                type: "String",
                required: true
            },
            cpf: {
                type: "String",
                required: true
            } , 
            rg: {
                type: "String",
                required: true
            } ,
            cellNumber: {
                type: "String",
                required: true
            } ,
            email: {
                type: "String",
                required: true
            }   
        }
    )
    return mongoose.model('client', schema);
}()