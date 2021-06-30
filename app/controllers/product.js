const ProductModel = require('../models/product')
const view = require('../views/product')
 
 module.exports.addproduct = (req, res) => {
    let product = req.body
    let promise = ProductModel.create(product)
    
    
    promise.then((product)=>{
        res.status(201).json(view.render(product))
    }).catch((error)=>{
        res.status(400).json({message: error})
    })
    console.log(promise)
}


module.exports.listproduct = (req, res) => {
    let promise = ProductModel.find().exec()
    promise.then((product)=>{
        res.status(200).json(view.renderMany(product))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.findproductById = (req, res) => {
    let id = req.params.id
    let promise = ProductModel.findById(id).exec()
    promise.then((product)=>{
        res.status(200).json(view.render(product))
    }).catch((error)=>{
            res.status(404).json({message: "product not found", error: error})
        }
    )
}


module.exports.findproductByIdAndDelete = (req, res) => {
    let id = req.params.id
    let promise = ProductModel.findByIdAndDelete(id).exec()
    promise.then((product)=>{
        res.status(200).json(view.render(product))
    }).catch((error)=>{
            res.status(400).json({message: "product not found", error: error})
        }
    )
}
