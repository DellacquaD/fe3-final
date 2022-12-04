import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '../Card'
import { useState, useEffect } from 'react';

export default function SpacingGrid() {

//   const handleChange = (event) => {
//     setSpacing(Number(event.target.value));
//   };


const [odontologos, setOdontologos] = useState([])

const urlApiOdontologs = "https://jsonplaceholder.typicode.com/users"


const fetchOdontologos = (url) => {
    
    fetch(url)
    .then(response => response.json())
    .then(data => setOdontologos(data))
    .catch(error => console.log(error));
    
}

useEffect(() => {
  fetchOdontologos(urlApiOdontologs)
}, [])
    
  return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={4}>
          {odontologos.map((odontologo) => (
            <Grid key={odontologo.id} item>
              <Card {...odontologo}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}