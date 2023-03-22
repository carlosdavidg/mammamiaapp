import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav.jsx"
import Home from "./views/Home.jsx"
import Carrito from "./views/Carrito.jsx"
import Detalle from "./views/Detalle.jsx"
import Footer from "./components/Footer.jsx"
import { useState, useEffect } from "react"
import MyContext from "./contexts/MyContext.jsx"


function App() {



  const [data, setData] = useState([]);
  const [pedidoCarrito, setPedidoCarrito] = useState([]);
  const [totalPedido, setTotalPedido] = useState(0);



  async function getData() {

    const res = await fetch("http://localhost:3000/pizzas.json")
    const data = await res.json()
    setData(data)

  }


  useEffect(() => {

    getData()


  }, [])



  const agregarPizza = (objeto) => {

    const index = pedidoCarrito.findIndex((pedido) => pedido.id === objeto.id)
    setTotalPedido(totalPedido + objeto.price)


    if (index > -1) {


      pedidoCarrito[index].cantidad += 1;
      setPedidoCarrito([...pedidoCarrito]);

    }

    else {

      const pizzaSeleccionada = {
        id: objeto.id, desc: objeto.desc, img: objeto.img,
        name: objeto.name, price: objeto.price, ingredients: objeto.ingredients, cantidad: 1
      }

      setPedidoCarrito([...pedidoCarrito, pizzaSeleccionada])

    }

  }


  return (
    <div className="App">


      <MyContext.Provider value={{ data, pedidoCarrito, setPedidoCarrito, totalPedido, setTotalPedido, agregarPizza }}>
        <BrowserRouter>

          <Nav />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<Detalle />} />
            <Route path="/carrito" element={<Carrito />} />


          </Routes>



        </BrowserRouter>
      </MyContext.Provider>
      <Footer />




    </div>
  );
}

export default App;
