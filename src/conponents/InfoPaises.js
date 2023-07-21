import React from "react";

export const InfoPaises = ({pais}) => {
 
  return (
    <section>
      <div>
        <h2>{pais.name.common}</h2>
        <img src={pais.flags.svg} alt={pais.name.common} />
        <p>Capital: {pais.capital}</p>
        <p>Región: {pais.continents}</p>
        <p>Población: {pais.population}</p>
      </div>
    </section>
  );
};
