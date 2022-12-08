import { Box, Typography } from '@mui/material'
import React from 'react'
import Grid from "../Components/common/Grid"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <Box sx={{ my: 5}}>
      <Typography sx={{
        fontSize: 40,
        display: 'flex',
        justifyContent: 'center',
        letterSpacing: "5px",
        mb: 5, 
        }}>
        Nuestros Dentistas
      </Typography>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <Grid />
      </div>
    </Box>
  )
}

export default Home