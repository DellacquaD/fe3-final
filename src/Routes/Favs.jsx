import React from "react";
import GridFavorites from "../Components/common/GridFavorites";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  return (
    <main className="" >
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        <GridFavorites />
      </div>
    </main>
  );
};

export default Favs;
