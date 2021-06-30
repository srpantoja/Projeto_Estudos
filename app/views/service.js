const render = (service) => {
    return {
        id: service._id,
        name: service.name,
        description: service.description,
        value: service.value,
    }
}

const renderMany = (services) =>{
    return services.map((service) => render(service))
}


module.exports.render = render
module.exports.renderMany = renderMany