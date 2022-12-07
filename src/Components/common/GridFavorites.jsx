import Grid from '@mui/material/Grid';
import Card from '../Card'
import React, { useContext } from 'react'
import { GlobalContext } from '../utils/global.context';

export default function GridFavorites() {
  useContext(GlobalContext)
  const favoriteArray = JSON.parse(localStorage.getItem("favorites"))

  return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={4}>
          {favoriteArray.map((odontologo) => (
            <Grid key={odontologo.id} item>
              <Card {...odontologo}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}