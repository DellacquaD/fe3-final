import { Box, Typography } from '@mui/material'
import React from 'react'
import Grid from "../Components/common/Grid"

const Home = () => {
  return (
    <Box sx={{ my: 5}}>
      <Typography 
      sx={{
        fontSize: 40,
        display: 'flex',
        justifyContent: 'center',
        letterSpacing: "5px",
        mb: 5, 
        }}>
        Our Dentists
      </Typography>
      <div className='card-grid'>
        <Grid />
      </div>
    </Box>
  )
}

export default Home