var Client = require('../models/client.js');
module.exports.insertClient = function(req, res){
   let promise = Client.create(req.body)
   promise.then(
       function(client) {
           res.status(201).json(client);
       }
   ).catch(
       function(erro){
           res.status(500).json(erro);
       }
	);
}

module.exports.ListOfClient = function(req,res){
    let promise = Client.find().exec();
    promise.then(
        function(client){
            res.json(client)
        }
    ).catch(
        function(erro){
            res.status(500).end();
        }
 );
 }
 