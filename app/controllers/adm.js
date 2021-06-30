const AdmModel = require('../models/adm')
const view = require('../views/adm')
 
 module.exports.addadm = (req, res) => {
    let adm = req.body
    let promise = AdmModel.create(adm)
    
    
    promise.then((adm)=>{
        res.status(201).json(view.render(adm))
    }).catch((error)=>{
        res.status(400).json({message: error})
    })
    console.log(promise)
}


module.exports.listadm = (req, res) => {
    let promise = AdmModel.find().exec()
    promise.then((adm)=>{
        res.status(200).json(view.renderMany(adm))
    }).catch((error)=>{
        res.status(400).json({message: "error message", error: error})
    })
}

module.exports.findadmById = (req, res) => {
    let id = req.params.id
    let promise = AdmModel.findById(id).exec()
    promise.then((adm)=>{
        res.status(200).json(view.render(adm))
    }).catch((error)=>{
            res.status(404).json({message: "adm not found", error: error})
        }
    )
}


module.exports.findadmByIdAndDelete = (req, res) => {
    let id = req.params.id
    let promise = AdmModel.findByIdAndDelete(id).exec()
    promise.then((adm)=>{
        res.status(200).json(view.render(adm))
    }).catch((error)=>{
            res.status(400).json({message: "adm not found", error: error})
        }
    )
}
