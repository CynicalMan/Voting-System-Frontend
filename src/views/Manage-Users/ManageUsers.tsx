import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../../components/searchbar";

type ManageUsersProps = {};

const ManageUsers: React.FC<ManageUsersProps> = () => {
  return (
    <div className="my-3">
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

export default ManageUsers
