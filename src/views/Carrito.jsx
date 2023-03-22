import React from 'react'
import { useContext } from 'react'
import MyContext from '../contexts/MyContext'
import { calcularTotalCart } from '../utils/calcularTotalCart';
import { NavLink } from 'react-router-dom';

const Carrito = () => {

  const { pedidoCarrito, setPedidoCarrito, totalPedido, setTotalPedido } = useContext(MyContext);

  const disminuir = (objeto) => {

    const index = pedidoCarrito.findIndex((pedido) => pedido.id === objeto.id)


    if (index > -1) {

      if (pedidoCarrito[index].cantidad > 0) {

        pedidoCarrito[index].cantidad -= 1;

        if (pedidoCarrito[index].cantidad === 0) {

          pedidoCarrito.splice(index, 1)
        }




        setPedidoCarrito([...pedidoCarrito]);

        setTotalPedido(calcularTotalCart(pedidoCarrito))

      }
    }

  }

  const aumentar = (objeto) => {

    const index = pedidoCarrito.findIndex((pedido) => pedido.id === objeto.id)

    if (index > -1) {

      if (pedidoCarrito[index].cantidad < 20) {


        pedidoCarrito[index].cantidad += 1;
        setPedidoCarrito([...pedidoCarrito])

        setTotalPedido(calcularTotalCart(pedidoCarrito))

      }
    }

  }




  return (
    <div className='cart-container'>
      <div className='cart-subcontainer'>
        <h3>Detalles del pedido:</h3>
        {pedidoCarrito.map((objeto) => {
          return (

            <div key={objeto.id}>
              <div className='cart'>
                <img src={objeto.img} alt="imagen-pizza"></img>
                <NavLink to={`/pizza/${objeto.id}`}>{objeto.name}</NavLink>
                <p>${objeto.price}</p>
                <h4>{objeto.cantidad}</h4>
                <p>${objeto.price * objeto.cantidad}</p>
                <button onClick={() => aumentar(objeto)}> + </button>
                <button onClick={() => disminuir(objeto)}> - </button>
              </div>
            </div>
          )

        })}
        <h3> Total: ${totalPedido}</h3>

      </div>
    </div>
  )
}

export default Carrito