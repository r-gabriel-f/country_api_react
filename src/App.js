import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { React} from "react";

import { VerRegion } from "./conponents/VerRegion";
import CountryInfo from "./conponents/CountryInfo";
import VerPaises from "./conponents/VerPaises";
import NavBar from "./conponents/NavBar";
import { Datos } from "./conponents/Datos";

function App() {
  const data = Datos();

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<VerPaises data={data} />} />
        <Route path="/region" element={<VerRegion data={data}/>} />
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
