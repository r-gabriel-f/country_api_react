import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import VerPaises from './conponents/VerPaises';
import { VerRegion } from './conponents/VerRegion';
import { NavBar } from './conponents/NavBar';
import CountryInfo from './conponents/CountryInfo';
import { React, useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setData(data)); console.log(data);
    
  }, []);
  
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<VerPaises />} />
          <Route path="/region" element={<VerRegion />} />
          <Route path="/pais/:countryName" element={<CountryInfo data={data} />} />
          {/*<Route path="/" element={<Navigate to="/paises" />} />*/}

          {/* Resto de las rutas */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

