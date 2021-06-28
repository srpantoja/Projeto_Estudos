var Pet = require('../models/pet')

module.exports.insertPet = function(req, res){
    let promise = Pet.create(req.body)
    promise.then(
        function(pet) {
            res.status(201).json(pet);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
     );
}