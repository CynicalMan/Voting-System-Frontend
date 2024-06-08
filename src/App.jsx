import Navbar from "./components/navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar routes={{
          homeRoute: "/",
          votingLogoRoute: "/",
          greenBtnRoute: "/ManageProfile"
        }} greenBtnText={"My Profile"} />
        <div className="row">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
