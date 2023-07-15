import { useState, useEffect } from "react";
import React from "react";
import "../conponents/VerApi.css"
const VerApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <section>
      <h1>Aplicando Api</h1>
      <div className="paises">
        <table>
          <thead>
            <tr>
              <th>Bandera</th>
              <th>Nombre</th>
              <th>Capital</th>
              <th>Población</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((auxpais) => (
              <tr key={auxpais.name.common}>
                <td>
                  <img src={auxpais.flags.svg} alt={auxpais.name.common} />
                </td>
                <td>{auxpais.name.common}</td>
                <td>{auxpais.capital}</td>
                <td>{auxpais.population}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default VerApi;


