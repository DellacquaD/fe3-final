import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {StarBorder, Star} from '@mui/icons-material';
import {Card, CardMedia, CardContent, Typography, Button, CardActions} from '@mui/material';


const Cards = ( { name, username, id } ) => {

 const [favState, setFav] = useState(localStorage.getItem("id") ? (localStorage.getItem("id").includes(id) ? true : false) : false)
 
  const handleClickFavorites = () => {
    setFavStorage(id)
    setFav(!favState)
  }

  const getFavStorage = () => {
    const localData = localStorage.getItem("id");
    return localData ? JSON.parse(localData) : [];
  }

   const setFavStorage = (idOdo) => {
    let storageFavs = getFavStorage();
    if (storageFavs.includes(idOdo)) {
      const storageFavsAux = storageFavs.filter(fav => fav !== idOdo)
      localStorage.setItem("id", JSON.stringify(storageFavsAux))
      
    }
    else {
      storageFavs.push(idOdo)
      localStorage.setItem("id", JSON.stringify(storageFavs))      
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
            <Link to={`/dentist/${id}`}>{name}</Link>
            </Typography>
            {username}
          </CardContent>
        </Card>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button id={id} size="medium" color="primary" onClick={handleClickFavorites} >
          {favState ? <Star id={id}/> : <StarBorder id={id}/>}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards