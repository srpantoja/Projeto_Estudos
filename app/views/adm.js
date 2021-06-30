const render = (adm) => {
    return {
        id: adm._id,
        name: adm.name,
        email: adm.email,
        password: adm.password
    }
}

const renderMany = (adms) =>{
    return adms.map((adm) => render(adm))
}


module.exports.render = render
module.exports.renderMany = renderMany