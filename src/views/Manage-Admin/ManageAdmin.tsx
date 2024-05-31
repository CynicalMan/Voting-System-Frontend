import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import SearchBar from "../../components/searchbar";
import DataTable from "../../components/datatable";

const ManageAdmin: React.FC = () => {

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

export default ManageAdmin;
