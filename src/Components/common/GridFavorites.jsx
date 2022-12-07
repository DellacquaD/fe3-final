import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '../Card'


export default function GridFavorites() {

    
    const favoriteArray = JSON.parse(localStorage.getItem("favorites"))
    
    // console.log(favoriteArray)
  

  return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={4}>
            {favoriteArray.map((odontologo) => (
            <Grid key={odontologo.id} item>
              <Card {...odontologo }/>
            </Grid>
          ))}
          </Grid>
        </Grid>
      </Grid>
  );
}