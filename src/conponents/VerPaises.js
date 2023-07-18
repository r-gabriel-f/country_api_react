import React, { useState, useEffect } from "react";
import "../conponents/VerPaises.css";
import { InfoPaises } from "./InfoPaises";

const VerPaises = () => {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [count, setCount] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data
    ? data.filter((auxpais) =>
        auxpais.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  const handleInfoClick = (pais) => {
    setSelectedCountry(pais);
  };
  return (
    <section>
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Buscar por país"
          aria-label="Search"
          aria-describedby="search-addon"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button type="button" className="btn btn-outline-primary">
          Buscar
        </button>
      </div>
      <div className="paises">
        <table>
          <thead>
            <tr>
              <th>N°</th>
              <th>Bandera</th>
              <th>Países</th>
              <th>Capital</th>
              <th>Región</th>
              <th>Población</th>
              <th>Información</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((auxpais, index) => (
              <tr key={auxpais.name.common}>
                <td>{count + index}</td>

                <td>
                  <img src={auxpais.flags.svg} alt={auxpais.name.common} />
                </td>
                <td>{auxpais.name.common}</td>
                <td>{auxpais.capital}</td>
                <td>{auxpais.continents}</td>
                <td>{auxpais.population}</td>
                <td>
                  <a href="#" onClick={() => handleInfoClick(auxpais)}>info</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedCountry && <InfoPaises pais={selectedCountry}></InfoPaises>}
    </section>
  );
};

export default VerPaises;
