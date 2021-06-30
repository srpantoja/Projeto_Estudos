const ClientModel = require('../models/client')
const view = require('../views/client')
 
 module.exports.addclient = (req, res) => {
    let client = req.body
    let promise = ClientModel.create(client)
    
    
    promise.then((client)=>{
        res.status(201).json(view.render(client))
    }).catch((error)=>{
        res.status(400).json({message: error})
    })
    console.log(promise)
}


module.exports.listclient = (req, res) => {
    let promise = ClientModel.find().exec()
    promise.then((client)=>{
        res.status(200).json(view.renderMany(client))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.findclientById = (req, res) => {
    let id = req.params.id
    let promise = ClientModel.findById(id).exec()
    promise.then((client)=>{
        res.status(200).json(view.render(client))
    }).catch((error)=>{
            res.status(404).json({message: "client not found", error: error})
        }
    )
}


module.exports.findclientByIdAndDelete = (req, res) => {
    let id = req.params.id
    let promise = ClientModel.findByIdAndDelete(id).exec()
    promise.then((client)=>{
        res.status(200).json(view.render(client))
    }).catch((error)=>{
            res.status(400).json({message: "client not found", error: error})
        }
    )
}
