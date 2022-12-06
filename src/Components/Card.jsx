import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {StarBorder, Star} from '@mui/icons-material';
import {Card, CardMedia, CardContent, Typography, Button, CardActions} from '@mui/material';
import { useReducer } from "react";


const reducer = (state, action) => {
  switch (action.type) {
    case "isFavorite":
      return {...state, isFavorite: !state.isFavorite};
    case "addFavorite":
      return {...state, addFavorite: state};
    default:
      return state;
  }
}

const Cards = ( { name, username, id } ) => {
  const initialState = {isFavorite: true, addFavorite: id};
  const [state, dispatch] = useReducer(reducer, initialState);

//   const addFav = ()=>{
//     // Aqui iria la logica para agregar la Card en el localStorage
//   }

 const [favState, setFav] = useState(localStorage.getItem("id") ? (localStorage.getItem("id").includes(id) ? true : false) : false)
 
  const handleClickFavorites = () => {
    dispatch({type: "isFavorite"})
    // dispatch({type: "addFavorite"})
    setFavStorage(state.addFavorite)
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