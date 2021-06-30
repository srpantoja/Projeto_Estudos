let controller = require("../controllers/query.js")

module.exports = (app) => {

    app.get("/api/query", controller.getAllQuery)
    app.get("/api/query/:id", controller.getQuery)
    app.post("/api/query", controller.addQuery)
    app.delete("/api/query/:id", controller.deleteQuery)
}