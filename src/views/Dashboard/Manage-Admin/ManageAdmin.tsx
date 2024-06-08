import { Outlet } from "react-router-dom";
import SearchBar from "../../../components/searchbar";


const ManageAdmin: React.FC = () => {

  return (
    <div className="my-3">
        <Outlet />
    </div>
  );
};

export default ManageAdmin;
