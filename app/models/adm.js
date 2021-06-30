const mongoose = require('mongoose')
module.exports = function(){
    const schema = mongoose.Schema(
        {
            login: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: false
            } , 
            password: {
                type: String,
                required: false
            } 
        }
    )
    return mongoose.model('email', schema);
}()