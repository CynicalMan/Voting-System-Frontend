import React from "react";
// import Login from "../login/Login";
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-xxl navbar-light ">
            <div className="container-fluid container-auto d-flex row">
                <div className="navbar-brand position-relative  col-10">
                    <a
                        className="navbar-brand position-relative fw-bold fs-2 text-success"
                        href="#"
                    >
                        E-Voting
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="align-items-center col-2">
                    <div className="row collapse navbar-collapse">
                        <div className="col-6">
                            <a
                                className="nav-link active  btn btn-success "
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                            {/* <Link to="/itemstate">itemstate</Link> */}

                        </div>
                        <div className="col-6 ">
                            <a className="nav-link btn btn-light " href="#">
                                My Profile
                            </a>
                            {/* <Link to="/Update">Update</Link> */}
                        </div>
                        <div className="col-6 ">
                            <a className="nav-link btn btn-light " href="#"></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
