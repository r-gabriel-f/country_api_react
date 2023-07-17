import React, { useState, useEffect } from "react";
import "../conponents/VerPaises.css";

export const VerRegion = () => {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  const filteredData = data
    ? data.filter(
        (auxpais) =>
          auxpais.name.common
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) &&
          (selectedRegion === "" || auxpais.continents.includes(selectedRegion))
      )
    : [];

  return (
    <section>
      <div className="boton-opciones">
        <button
          type="button"
          className={`btn btn-primary ${
            selectedRegion === "Asia" ? "active" : ""
          }`}
          onClick={() => handleRegionClick("Asia")}
        >
          Asia
        </button>
        <button
          type="button"
          className={`btn btn-primary ${
            selectedRegion === "Oceania" ? "active" : ""
          }`}
          onClick={() => handleRegionClick("Oceania")}
        >
          Oceania
        </button>
        <button
          type="button"
          className={`btn btn-primary ${
            selectedRegion === "Europe" ? "active" : ""
          }`}
          onClick={() => handleRegionClick("Europe")}
        >
          Europa
        </button>
        <button
          type="button"
          className={`btn btn-primary ${
            selectedRegion === "North America" ? "active" : ""
          }`}
          onClick={() => handleRegionClick("North America")}
        >
          Norte America
        </button>
        <button
          type="button"
          className={`btn btn-primary ${
            selectedRegion === "Antarctica" ? "active" : ""
          }`}
          onClick={() => handleRegionClick("Antarctica")}
        >
          Antartica
        </button>
        <button
          type="button"
          className={`btn btn-primary ${
            selectedRegion === "South America" ? "active" : ""
          }`}
          onClick={() => handleRegionClick("South America")}
        >
          Sud America
        </button>
        <button
          type="button"
          className={`btn btn-primary ${
            selectedRegion === "Africa" ? "active" : ""
          }`}
          onClick={() => handleRegionClick("Africa")}
        >
          Africa
        </button>
      </div>
      <div className="paises">
        <table>
          <thead>
            <tr>
              <th>N°</th>

              <th>Bandera</th>
              <th>Paises</th>
              <th>Capital</th>
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
                <td>{auxpais.population}</td>
                <td>
                  <a href="">info</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
