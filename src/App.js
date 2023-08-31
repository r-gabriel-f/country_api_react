import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { React, useState, useEffect } from "react";

import { VerRegion } from "./conponents/VerRegion";
import CountryInfo from "./conponents/CountryInfo";
import VerPaises from "./conponents/VerPaises";
import NavBar from "./conponents/NavBar";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setData(data));
      console.log(data);

  }, []);

  return (

      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<VerPaises />} />
          <Route path="/region" element={<VerRegion />} />
          <Route
            path="/pais/:countryName"
            element={<CountryInfo data={data} />}
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Router>

  );
}

export default App;
