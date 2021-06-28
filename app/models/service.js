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
            }
        }
    )
    return mongoose.model('Service', schema);
}()