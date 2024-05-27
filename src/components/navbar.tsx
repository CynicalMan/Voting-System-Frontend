import React, { Component } from "react";
import { Link } from "react-router-dom";

type Props = {};

type State = {};

export default class navbar extends Component<Props, State> {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="nav-link text-decoration-none">
            E-Vote
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to={"/"} className="nav-link text-decoration-none">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to={"/ManageElections"} className="nav-link text-decoration-none">
                add new elections
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
