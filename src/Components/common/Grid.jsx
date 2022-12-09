import Grid from '@mui/material/Grid';
import Card from '../Card'
import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../utils/global.context';
import axios from "axios";

export default function SpacingGrid() {

const { state, dispatch } = useContext(GlobalContext)

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users').then(
    res => {
      dispatch({type: "data" , payload: res.data})
    }
  )
}, [])

 return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={4}>
          {state.data.map((odontologo) => (
            <Grid key={odontologo.id} item>
              <Card {...odontologo}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}