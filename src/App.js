import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { React } from "react";

import { Datos } from "./conponents/Datos/Datos";
import VerPaises from "./conponents/VerPaises/VerPaises";
import { VerRegion } from "./conponents/VerRegion/VerRegion";
import CountryInfo from "./conponents/CountryInfo/CountryInfo";
import NavBar from "./conponents/NavBar/NavBar";

function App() {
  const data = Datos();

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<VerPaises data={data} />} />
        <Route path="/region" element={<VerRegion data={data} />} />
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
