import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import MyContext from '../contexts/MyContext';

const Card = ({ objeto }) => {

  const navigate = useNavigate();
  const { agregarPizza } = useContext(MyContext);

  const verMas = () => {
    navigate(`/pizza/${objeto.id}`)
  }




  return (
    <div key={objeto.id}>
      <div className='cards'>
        <img src={objeto.img} alt="imagen-pizza"></img>
        <h3>{objeto.name}</h3>
        <p>{objeto.id}</p>
        <h4> Ingredientes:</h4>
        <ul className='ul'> 

          {objeto.ingredients.map((ingrediente) =>  <li>{ingrediente}</li> )}
        
        </ul>
        <p>${objeto.price}</p>
        <div className='buttons'>
          <button onClick={() => verMas()}>Ver más</button>
          <button onClick={() => agregarPizza(objeto)}>Agregar al Carrito</button>
        </div>
      </div>
    </div>
  )
}

export default Card