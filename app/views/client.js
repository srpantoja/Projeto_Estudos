const render = (client) => {
    return {
        id: client._id,
        name: client.name,
        cpf: client.cpf,
        rg: client.rg,
        cellNumber: client.cellNumber,
        email: client.email,
        password: client.password
    }
}

const renderMany = (clients) =>{
    return clients.map((client) => render(client))
}


module.exports.render = render
module.exports.renderMany = renderMany