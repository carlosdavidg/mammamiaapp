import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import MyContext from '../contexts/MyContext'

const Detalle = () => {

  const { id } = useParams();

  const { data, agregarPizza } = useContext(MyContext);

  const objetoPizza = data.find(objeto => objeto.id === id)


  return (
    <div>

      <div className='detail-container'>
        <div className='detail'>

        <img src={objetoPizza.img} alt="imagen-pizza"></img>
        <h3>{objetoPizza.name}</h3>
        <p>{objetoPizza.desc}</p>
        <h4> Ingredientes:</h4>
        <ul className='ul'>

          {objetoPizza.ingredients.map((ingrediente) => <li>{ingrediente}</li>)}

        </ul>
        <p>${objetoPizza.price}</p>
        <div className='buttons'>
          <button onClick={() => agregarPizza(objetoPizza)}>Añadir</button>
        </div>

      </div>

      </div>
    </div>
  )
}

export default Detalle