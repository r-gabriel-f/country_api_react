import { React, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();

  //inicio
  const handlePaisesClick = () => {
    navigate("/");
    setIsMenuOpen(false);
  };

  //region
  const handleRegionnClick = () => {
    navigate("/region");
    setIsMenuOpen(false);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          Api Paises
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarSupportedContent"
          className={`collapse navbar-collapse justify-content-end ${
            isMenuOpen ? "show" : ""
          }`}
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item active mx-3">
              <Link
                className="nav-link"
                aria-current="page"
                to="/"
                onClick={handlePaisesClick}
              >
                Paises
              </Link>
            </li>
            <li className="nav-item active mx-3">
              <Link
                className="nav-link"
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
export default NavBar;
