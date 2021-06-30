const mongoose = require('mongoose')
module.exports = function(){
    const schema = mongoose.Schema(
        {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: false
            } , 
            value: {
                type: Number,
                required: false
            } ,
            stock : {
                type: Number,
                required: true
            }
        }
    )
    return mongoose.model('product', schema);
}()