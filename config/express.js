let express = require('express')
let PetRouter = require('../app/routes/pet.js')
let ClientRouter = require('../app/routes/client.js')
let ServiceRouter = require('../app/routes/service.js')
let ProductRouter = require('../app/routes/product.js')

module.exports = function() {
    let app = express()
    app.set("port", 3000)
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(express.static('./public'))
    PetRouter(app)
    ClientRouter(app)
    ServiceRouter(app)
    ProductRouter(app)
    return app
}