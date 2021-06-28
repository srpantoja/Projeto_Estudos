var Service = [
    {
        _id: 1, 
        name:"name", 
        description: "description", 
        value: 30
    },
]

module.exports.getAllService = (req, res) => res.json(Service)

module.exports.getService = (req, res) => {
    var id = req.params.id
    var service = Service.find(service => (service._id==id))
    
    if(service){
        res.json(service)
    }
    else{
        res.status(404).send("Service not found")
    }
        
}

module.exports.addService = (req, res) => {
    
    let service = req.body
    Service.push(service)
    res.json(service).status(201)
}

module.exports.deleteService = (req, res) => {
    var id = req.params.id
    Service = Service.filter(service => service._id!=id)
    res.json({message: "Service removed"})
    
    
}