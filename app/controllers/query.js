const QueryModel = require('../models/query')
const view = require('../views/query')
 
 module.exports.addquery = (req, res) => {
    let query = req.body
    let promise = QueryModel.create(query)
    
    
    promise.then((query)=>{
        res.status(201).json(view.render(query))
    }).catch((error)=>{
        res.status(400).json({message: error})
    })
    console.log(promise)
}


module.exports.listquery = (req, res) => {
    let promise = QueryModel.find().exec()
    promise.then((query)=>{
        res.status(200).json(view.renderMany(query))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.findqueryById = (req, res) => {
    let id = req.params.id
    let promise = QueryModel.findById(id).exec()
    promise.then((query)=>{
        res.status(200).json(view.render(query))
    }).catch((error)=>{
            res.status(404).json({message: "query not found", error: error})
        }
    )
}


module.exports.findqueryByIdAndDelete = (req, res) => {
    let id = req.params.id
    let promise = QueryModel.findByIdAndDelete(id).exec()
    promise.then((query)=>{
        res.status(200).json(view.render(query))
    }).catch((error)=>{
            res.status(400).json({message: "query not found", error: error})
        }
    )
}
