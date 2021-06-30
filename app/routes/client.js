let controller = require("../controllers/client.js")

module.exports = (app) => {

    //app.get("/api/client", controller.getAllClient)
    //app.get("/api/client/:id", controller.getClient)
    app.post("/api/client", controller.addclient)
    //app.delete("/api/client/:id", controller.deleteClient)
}