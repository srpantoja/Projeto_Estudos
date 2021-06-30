let controller = require("../controllers/client.js")

module.exports = (app) => {

    app.get("/api/client", controller.getAllclient)
    app.get("/api/client/:id", controller.getclient)
    app.post("/api/client", controller.addclient)
    app.delete("/api/client/:id", controller.deleteclient)
}