import { Link } from 'react-router-dom';
import {StarBorder, Star} from '@mui/icons-material';
import {Card, CardMedia, CardContent, Typography, Button, CardActions} from '@mui/material';
import React, { useContext } from 'react'
import { GlobalContext } from '../Components/utils/global.context';
import { setFavStorage, isFav } from './utils/functions'; 


const Cards = ( odontologo ) => {

  const { state, dispatch } = useContext(GlobalContext)
 
  const handleClickFavorites = () => {
    setFavStorage(odontologo)
    dispatch({type: "fav", payload: !state.fav})
  }
  
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image="https://raw.githubusercontent.com/Frontend-III/fe3-final/main/public/images/doctor.jpg"
            alt="doctor image Background"
            />
          <CardContent 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center'
            }}>
            <Typography component={Link} gutterBottom variant="h5" to={`/dentist/${odontologo.id}`} color="secondary">
              {odontologo.name}
            </Typography >
            {odontologo.username}
          </CardContent>
        </Card>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button id={odontologo.id} size="medium" color="succes" onClick={handleClickFavorites}>
          {isFav(odontologo) ? <Star id={odontologo.id} color=""/> : <StarBorder id={odontologo.id}/>}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards