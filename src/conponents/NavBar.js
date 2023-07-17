import { React, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();

  //inicio
  const handlePaisesClick = () => {
    navigate("/paises");
    setIsMenuOpen(false);
  };

  //institucion
  const handleRegionnClick = () => {
    navigate("/region");
    setIsMenuOpen(false);
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Api Paises
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
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
