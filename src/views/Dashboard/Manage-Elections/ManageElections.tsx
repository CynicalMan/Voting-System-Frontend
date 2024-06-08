import { Outlet } from "react-router-dom";
import SearchBar from "../../../components/searchbar";

type ManageElectionsProps = {}

const ManageElections: React.FC<ManageElectionsProps> = () => {

  return (
    <div className="my-3">
      <Outlet />
  </div>
  )
}

export default ManageElections