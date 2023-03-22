import React from 'react'
import { useContext } from 'react'
import MyContext from '../contexts/MyContext.jsx'
import Card from '../components/Card.jsx'

const Home = () => {

  const {data} = useContext(MyContext)


  return (
    <div>
      <div className='home-container'>
          {data.map((objeto)=> {
            return <Card objeto={objeto} key={objeto.name}> 
                      

                  </Card>
          })}
        </div>
        
    </div>
  )
}

export default Home