var Product = [
    {
        _id: 1, 
        name:"name", 
        description: "description", 
        value: 120,
        qty: 20
    },
]

module.exports.getAllProduct = (req, res) => res.json(Product)

module.exports.getProduct = (req, res) => {
    var id = req.params.id
    var product = Product.find(product => (product._id==id))
    
    if(product){
        res.json(product)
    }
    else{
        res.status(404).send("Product not found")
    }
        
}

module.exports.addProduct = (req, res) => {
    
    let product = req.body
    Product.push(product)
    res.json(product).status(201)
}

module.exports.deleteProduct = (req, res) => {
    var id = req.params.id
    Product = Product.filter(product => product._id!=id)
    res.json({message: "Product removed"})
    
    
}