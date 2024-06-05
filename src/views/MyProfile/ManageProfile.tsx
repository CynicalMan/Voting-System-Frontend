import React from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../../components/searchbar";

const ManageProfile: React.FC = () => {
    return (
        <div className="my-3 mt-4">
            <SearchBar
                onSearch={function (query: string): void {
                    throw new Error("Function not implemented.");
                }}
            />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default ManageProfile;
