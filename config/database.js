var mongoose = require('mongoose');

module.exports = function(uri){
   mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
   mongoose.connection.on('connected', function() {
       console.log('Mongoose! conected in '+uri);
   });
    mongoose.connection.on('disconnected',  function() {
        console.log('Mongoose! desconected ' + uri);
    });
    mongoose.connection.on('error', function(erro) {
        console.log('Mongoose! Conection Error: ' + erro);
    });
   mongoose.set('debug',true);
}
