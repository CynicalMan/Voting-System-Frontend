import React from "react";
import { Link } from "react-router-dom";


type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top primary-bg secondary-color">
      <div className="container-fluid d-flex justify-content-between p-2">
        <Link to={"/"} className="nav-link text-decoration-none">
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
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active fw-bold">
              <Link to={"/"} className="nav-link text-decoration-none">
                Home
              </Link>
            </li>
            <li className="nav-item secondary-bg fw-bold">
              <Link
                to={"/ManageElections/AddElection"}
                className="nav-link text-decoration-none"
              >
                Add new election 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
