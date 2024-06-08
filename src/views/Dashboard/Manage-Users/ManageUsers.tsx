import { Outlet } from "react-router-dom";
import SearchBar from "../../../components/searchbar";


type ManageUsersProps = {};

const ManageUsers: React.FC<ManageUsersProps> = () => {
  return (
    <div className="my-3">
        <Outlet />
    </div>
  );
};

export default ManageUsers
