let controller = require("../controllers/product.js")

module.exports = (app) => {

    app.get("/product", controller.getAllProduct)
    app.get("/product/:id", controller.getProduct)
    app.post("/product", controller.addProduct)
    app.delete("/product/:id", controller.deleteProduct)
}