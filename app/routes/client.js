let controller = require("../controllers/client.js")

module.exports = (app) => {

    app.get("/api/client", controller.listclient)
    app.get("/api/client/:id", controller.findclientById)
    app.post("/api/client", controller.addclient)
    app.delete("/api/client/:id", controller.findclientByIdAndDelete)
}