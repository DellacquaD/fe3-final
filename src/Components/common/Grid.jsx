import Grid from '@mui/material/Grid';
import Card from '../Card'
import React, { useContext } from 'react'
import { GlobalContext } from '../utils/global.context';

export default function SpacingGrid() {

const { state } = useContext(GlobalContext)

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