import React from 'react'
import Grid from "../Components/common/Grid"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

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