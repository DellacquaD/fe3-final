import { useState } from 'react';
import { Link } from 'react-router-dom';
import {StarBorder, Star} from '@mui/icons-material';
import {Card, CardMedia, CardContent, Typography, Button, CardActions} from '@mui/material';
import React, { useContext } from 'react'
import { GlobalContext } from '../Components/utils/global.context';



const Cards = ( odontologo ) => {

const { setCheckFavorite, checkFavorite } = useContext(GlobalContext)


const [favState, setFav] = useState(localStorage.getItem("favorites") ? (JSON.parse(localStorage.getItem("favorites")).some(e => e.id === odontologo.id) ? true : false) : false)
 
  const handleClickFavorites = () => {
    setFavStorage(odontologo)
    setFav(!favState)
    setCheckFavorite(!checkFavorite)
  }

  const getFavStorage = () => {
    const localData = localStorage.getItem("favorites");
    return localData ? JSON.parse(localData) : [];
  }

   const setFavStorage = (odontologo) => {
    let storageFavs = getFavStorage();
    if (storageFavs.some(e => e.id === odontologo.id)) {
      const storageFavsAux = storageFavs.filter(fav => fav.id !== odontologo.id)
      localStorage.setItem("favorites", JSON.stringify(storageFavsAux))  
    }
    else {
      storageFavs.push(odontologo)
      localStorage.setItem("favorites", JSON.stringify(storageFavs))   
    }
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
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
            <Link to={`/dentist/${odontologo.id}`}>{odontologo.name}</Link>
            </Typography>
            {odontologo.username}
          </CardContent>
        </Card>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button id={odontologo.id} size="medium" color="primary" onClick={handleClickFavorites} onChange={handleClickFavorites}>
          {favState ? <Star id={odontologo.id}/> : <StarBorder id={odontologo.id}/>}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards