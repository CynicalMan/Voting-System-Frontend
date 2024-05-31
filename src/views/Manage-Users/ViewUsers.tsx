
import { Link } from "react-router-dom";
import DataTable from "../../components/datatable";
import { useState } from "react";
import Modal from "../../components/modal";
import AddIcon from "../../assets/add.png"

const ViewUsers: React.FC = () => {

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Elections', accessor: 'elections' },
    { header: 'National ID(SSN)', accessor: 'id' },
  ];

  const data = [
    { name: 'User 1', elections: 'Election name', id: '222' },
    { name: 'User 2', elections: 'Election name', id: '222' },
  ];


  return (
    <div className="test p-2">
      <DataTable columns={columns} data={data} showActions routes={{
        viewRoute: "ViewUserProfile",
        deleteRoute: "DeleteUser"
      }} deleteText={"Are you sure you want to delete this user?"} />
    </div>
  );
};

export default ViewUsers;
