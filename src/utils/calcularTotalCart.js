const calcularTotalCart = (productosCart) => {

    let total = 0;

    productosCart.map((objeto) => total += (objeto.price * objeto.cantidad)
    )

    return total


}

export { calcularTotalCart }