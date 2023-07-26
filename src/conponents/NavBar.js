import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Set isMenuOpen to true initially

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to "/paises" when the component mounts
    navigate("/paises");
  }, []); // Empty dependency array ensures this runs only once, on mount

  const handlePaisesClick = () => {
    navigate("/paises");
    setIsMenuOpen(false);
  };

  const handleRegionnClick = () => {
    navigate("/region");
    setIsMenuOpen(false);
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand">Api Paises</a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarSupportedContent"
          className={`collapse navbar-collapse justify-content-end ${
            isMenuOpen ? "show" : ""
          }`}
        >
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item active mx-3">
              <Link
                class="nav-link"
                aria-current="page"
                to="/paises"
                onClick={handlePaisesClick}
              >
                Paises
              </Link>
            </li>
            <li class="nav-item active mx-3">
              <Link
                class="nav-link"
                aria-current="page"
                to="/region"
                onClick={handleRegionnClick}
              >
                Region
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

