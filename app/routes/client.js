let controller = require("../controllers/client.js")

module.exports = (app) => {

    app.get("/client", controller.getAllClient)
    app.get("/client/:id", controller.getClient)
    app.post("/client", controller.addClient)
    app.delete("/client/:id", controller.deleteClient)
}