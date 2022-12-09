import Grid from '@mui/material/Grid';
import Card from '../Card'
import React, { useContext } from 'react'
import { GlobalContext } from '../utils/global.context';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function GridFavorites() {
 const {state} = useContext(GlobalContext)
  // const favoriteArray = (JSON.parse(localStorage.getItem("favorites")) ? JSON.parse(localStorage.getItem("favorites")) : [])

  return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={4}>
          {state.fav2render.map((odontologo) => (
            <Grid key={odontologo.id} item>
              <Card {...odontologo}/>
            </Grid>
          ))}
          {state.fav2render.length > 0 ? "" :
            <Typography>You have no dentists added to favorites 
              <Button component={Link} to={"/home"} color="secondary" style={{fontWeight: "bold"}}>Back to Home</Button>
            </Typography>}
        </Grid>
      </Grid>
    </Grid>
  );
}