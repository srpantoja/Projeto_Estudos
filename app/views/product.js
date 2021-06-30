const render = (product) => {
    return {
        id: product._id,
        name: product.name,
        description: product.description,
        value: product.value,
        stock: product.stock
    }
}

const renderMany = (products) =>{
    return products.map((product) => render(product))
}


module.exports.render = render
module.exports.renderMany = renderMany