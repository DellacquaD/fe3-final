import React from 'react'
import Grid from "../Components/common/Grid"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <Grid />
      </div>
    </main>
  )
}

export default Home