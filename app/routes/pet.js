let controller = require("../controllers/pet.js")

module.exports = (app) => {

    app.get("/pet", controller.getAllPet)
    app.get("/pet/:id", controller.getPet)
    app.post("/pet", controller.addPet)
    app.delete("/pet/:id", controller.deletePet)
}