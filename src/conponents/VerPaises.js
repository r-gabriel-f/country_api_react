import React, { useState} from "react";
import "../conponents/VerPaises.css";
import { Link } from "react-router-dom";

const VerPaises = ({data}) => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [count, setCount] = useState(1);
  const itemsPerPage = 10;

  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredData = data
    ? data.filter((auxpais) =>
        auxpais.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  const handleNextPage = () => {
    if (count * itemsPerPage < filteredData.length) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const handlePrevPage = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const paginatedData = filteredData.slice(
    (count - 1) * itemsPerPage,
    count * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <section className="fondo-web">
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
      </div>
      <div className="paises">
        <table className="tabla-paises">
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
            {paginatedData.map((auxpais, index) => (
              <tr key={auxpais.name.common}>
                <td>{(count - 1) * itemsPerPage + index + 1}</td>
                <td>
                  <img src={auxpais.flags.svg} alt={auxpais.name.common} />
                </td>
                <td>{auxpais.name.common}</td>
                <td>{auxpais.capital}</td>
                <td>{auxpais.continents}</td>
                <td>{auxpais.population.toLocaleString()}</td>
                <td>
                  <button>
                    <Link
                      to={`/pais/${auxpais.name.common}`}
                    >
                      Información
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={count === 1}>
            Previous
          </button>
          <span>{`Page ${count} of ${totalPages}`}</span>
          <button
            onClick={handleNextPage}
            disabled={count * itemsPerPage >= filteredData.length}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default VerPaises;
