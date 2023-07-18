import React from "react";

export const InfoPaises = ({pais}) => {
  return (
    <section>
      <div>
        <h2>{pais.name.common}</h2>
        <p>Capital: {pais.capital}</p>
        <p>Región: {pais.continents}</p>
        <p>Población: {pais.population}</p>
        {/* Agrega más información si lo deseas */}
      </div>
    </section>
  );
};
