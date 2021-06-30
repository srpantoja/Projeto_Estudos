const PetModel = require('../models/pet')
const view = require('../views/pet')
 
 module.exports.addpet = (req, res) => {
    let pet = req.body
    let promise = PetModel.create(pet)
    
    
    promise.then((pet)=>{
        res.status(201).json(view.render(pet))
    }).catch((error)=>{
        res.status(400).json({message: error})
    })
    console.log(promise)
}


module.exports.listpet = (req, res) => {
    let promise = PetModel.find().exec()
    promise.then((pet)=>{
        res.status(200).json(view.renderMany(pet))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.findpetById = (req, res) => {
    let id = req.params.id
    let promise = PetModel.findById(id).exec()
    promise.then((pet)=>{
        res.status(200).json(view.render(pet))
    }).catch((error)=>{
            res.status(404).json({message: "pet not found", error: error})
        }
    )
}


module.exports.findpetByIdAndDelete = (req, res) => {
    let id = req.params.id
    let promise = PetModel.findByIdAndDelete(id).exec()
    promise.then((pet)=>{
        res.status(200).json(view.render(pet))
    }).catch((error)=>{
            res.status(400).json({message: "pet not found", error: error})
        }
    )
}
