import Navbar from "./components/navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
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

export default App;
