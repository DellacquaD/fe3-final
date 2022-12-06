import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useState } from 'react';


// const Card = ({ name, username, id }) => {

//   const addFav = ()=>{
//     // Aqui iria la logica para agregar la Card en el localStorage
//   }

//   return (
//     <div className="card">
//         {/* En cada card deberan mostrar en name - username y el id */}

//         {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

//         {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
//         <button onClick={addFav} className="favButton">Add fav</button>
//     </div>
//   );
// };

// export default Card;

export default function Cards( odontologos ) {

  const [favorites, setFavorites] = useState([])

  const handleClickFavorites = (e) => {
    console.log(e)
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
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Link to={`/dentist/${id}`}>{username}</Link>
          </CardContent>
        </Card>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size="small" color="primary" onClick={handleClickFavorites()} >
            <StarBorderIcon/>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards