import React from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  return (
    <div>
      <Navbar/>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
