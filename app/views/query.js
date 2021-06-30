const render = (query) => {
    return {
        id: query._id,
        idClient: query.idClient,
        idPet: query.idPet,
        idService: query.idService,
        idProduct: query.idProduct,
        date: query.date
    }
}

const renderMany = (querys) =>{
    return querys.map((query) => render(query))
}

module.exports.render = render
module.exports.renderMany = renderMany