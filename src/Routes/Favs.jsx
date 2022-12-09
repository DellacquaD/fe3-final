import { Box, Typography } from "@mui/material";
import React from "react";
import GridFavorites from "../Components/common/GridFavorites";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  return (
    <Box 
    sx={{ 
      my: 5, 
      minHeight: '75vh'}} >
      <div>
      <Typography 
      sx={{
        fontSize: 40,
        display: 'flex',
        justifyContent: 'center',
        letterSpacing: "5px",
        mb: 5, 
        }}>
        Favorite Dentists
      </Typography>
        <div className='card-grid'>
          {/* Aqui deberias renderizar las cards */}        
          <GridFavorites />
        </div>
      </div>
    </Box>
  );
};

export default Favs;
