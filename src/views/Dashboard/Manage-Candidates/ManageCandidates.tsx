import { Outlet } from "react-router-dom";
import SearchBar from "../../../components/searchbar";

type ManageCandidatesProps = {}

const ManageCandidates: React.FC<ManageCandidatesProps> = () => {

  return (
    <div className="my-3">
      <Outlet />
  </div>
  )
}

export default ManageCandidates