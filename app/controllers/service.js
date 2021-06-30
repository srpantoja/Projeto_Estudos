const ServiceModel = require('../models/service')
const view = require('../views/service')
 
 module.exports.addservice = (req, res) => {
    let service = req.body
    let promise = ServiceModel.create(service)
    
    
    promise.then((service)=>{
        res.status(201).json(view.render(service))
    }).catch((error)=>{
        res.status(400).json({message: error})
    })
    console.log(promise)
}


module.exports.listservice = (req, res) => {
    let promise = ServiceModel.find().exec()
    promise.then((service)=>{
        res.status(200).json(view.renderMany(service))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.findserviceById = (req, res) => {
    let id = req.params.id
    let promise = ServiceModel.findById(id).exec()
    promise.then((service)=>{
        res.status(200).json(view.render(service))
    }).catch((error)=>{
            res.status(404).json({message: "service not found", error: error})
        }
    )
}


module.exports.findserviceByIdAndDelete = (req, res) => {
    let id = req.params.id
    let promise = ServiceModel.findByIdAndDelete(id).exec()
    promise.then((service)=>{
        res.status(200).json(view.render(service))
    }).catch((error)=>{
            res.status(400).json({message: "service not found", error: error})
        }
    )
}
