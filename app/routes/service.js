let controller = require("../controllers/service.js")

module.exports = (app) => {

    app.get("/service", controller.getAllService)
    app.get("/service/:id", controller.getService)
    app.post("/service", controller.addService)
    app.delete("/service/:id", controller.deleteService)
}