import Navbar from "./components/navbar";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";

const Dashboard = () => {
    return (
        <>
        <div className="container">
            <Navbar routes={{
                    homeRoute: "/Dashboard",
                    votingLogoRoute: "/Dashboard",
                    greenBtnRoute: "/Dashboard/ManageElections/AddElection"
                }}  />
            <div className="row">
                <div className="col-3">
                    <Sidebar />
                </div>
                <div className="col-9">
                    <Outlet />
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;
