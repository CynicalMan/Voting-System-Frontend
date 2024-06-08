import { Outlet } from "react-router-dom";


const ManageProfile: React.FC = () => {
    return (
        <div className="my-3 mt-4">
            <Outlet />
        </div>
    );
};

export default ManageProfile;
