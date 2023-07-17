import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import VerPaises from './conponents/VerPaises';
import { VerRegion } from './conponents/VerRegion';
import { NavBar } from './conponents/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/paises" element={<VerPaises />} />
          <Route path="/region" element={<VerRegion />} />
          <Route path="/" element={<Navigate to="/paises" />} />

          {/* Resto de las rutas */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

