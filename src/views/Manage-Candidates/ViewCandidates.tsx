
import { Link } from "react-router-dom";
import DataTable from "../../components/datatable";
import { useState } from "react";
import Modal from "../../components/modal";
import AddIcon from "../../assets/add.png"

const ViewCandidates: React.FC = () => {

  const columns = [
    { header: 'Id', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Role', accessor: 'role' },
  ];

  const data = [
    {id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    {id: 3, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  ];

  return (
    <div className="test p-2">
      <DataTable columns={columns} data={data} showActions routes={{
        viewRoute: "ViewCandidateProfile",
        deleteRoute: "DeleteCandidate"
      }} deleteText={"Are you sure you want to delete this candidate?"} />
      <div className="text-center">
        <Link to={`AddCandidate`} className="btn ">
          <img src={AddIcon} width={66} height={66} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ViewCandidates;
