import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

type NavbarProps = {
  routes: {
    homeRoute: string;
    votingLogoRoute: string;
    greenBtnRoute: string;
  };
  greenBtnText: string;
};

const Navbar: React.FC<NavbarProps> = ({ routes, greenBtnText = "Add Election" }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>(location.pathname);

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top primary-bg secondary-color">
      <div className="container-fluid d-flex justify-content-between p-2">
        <Link to={routes.votingLogoRoute} className="nav-link text-decoration-none">
          <h2>E-Voting</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav nav">
            <li className={`nav-item fw-bold ${activeLink === routes.homeRoute ? 'active' : ''}`}>
              <Link
                to={routes.homeRoute}
                onClick={() => handleLinkClick(routes.homeRoute)}
                className="nav-link text-center py-1 text-black"
              >
                Home
              </Link>
            </li>
            <li className={`nav-item fw-bold  ${activeLink === routes.greenBtnRoute ? 'active' : ''}`}>
              <Link
                to={routes.greenBtnRoute}
                onClick={() => handleLinkClick(routes.greenBtnRoute)}
                className="nav-link text-center py-1 text-black"
              >
                {greenBtnText}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
