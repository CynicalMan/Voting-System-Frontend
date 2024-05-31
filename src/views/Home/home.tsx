import React, { Component } from "react";
import SearchBar from "../../components/searchbar";
import DataTable from "../../components/datatable";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const columns = [
    { header: "Date", accessor: "date" },
    { header: "Admin", accessor: "admin" },
  ];

  const data = [{ date: "20/12/2024", admin: "john" }];

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className="my-3">
      <SearchBar onSearch={handleSearch} />
      <div className="test p-3">
        <div className="d-flex justify-content-around mb-3">
          <h1 className="">Welcome</h1>
          <div className="last-login ">
            <DataTable columns={columns} data={data} showActions={false} />
          </div>
        </div>
        <div className="stats w-50 mx-auto d-flex justify-content-around">
          <div className="admin-stat p-3 secondry-bg text-center">
            <span className="mb-2">Admins</span>
            <span>1</span>
          </div>
          <div className=" election-stat p-3 secondry-bg text-center">
            <span className="mb-2">Elections</span>
            <span>3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
