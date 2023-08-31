import React from "react";
import "../conponents/InfoPaises.css";
export const InfoPaises = ({ pais }) => {
  return (
    <section className="container-info" style={{ backgroundImage: `url(${pais.flags.svg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="informacion" >
        <div className="pais-bandera">
          <h2>{pais.name.common}</h2>
          <img
            src={pais.coatOfArms.svg}
            alt={pais.name.common}
            className="img-info"
          />
        </div>
        <div className="informacion-pais">
          <h2>Información</h2>
          <p>Capital: {pais.capital}</p>
          <p>Región: {pais.continents}</p>
          <p>Población: {pais.population.toLocaleString()}</p>
          <p>Zona Horaria: {pais.timezones}</p>
          <p>Lenguas: {Object.values(pais.languages).join(", ")}</p>
        </div>
      </div>
    </section>
  );
};
