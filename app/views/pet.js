const render = (pet) => {
    return {
        id: pet._id,
        clientId: pet.clientId,
        name: pet.name,
        species: pet.species,
        breed: pet.breed,
        age: pet.age,
        lastDeworming: pet.lastDeworming,
        lastVaccination: pet.lastVaccination,
        clinicalObservations: pet.clinicalObservations
    }
}

const renderMany = (pets) =>{
    return pets.map((pet) => render(pet))
}

module.exports.render = render
module.exports.renderMany = renderMany