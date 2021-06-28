let controller = require("../controllers/query.js")

module.exports = (app) => {

    app.get("/query", controller.getAllQuery)
    app.get("/query/:id", controller.getQuery)
    app.post("/query", controller.addQuery)
    app.delete("/query/:id", controller.deleteQuery)
}