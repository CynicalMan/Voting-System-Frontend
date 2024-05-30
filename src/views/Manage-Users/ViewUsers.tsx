
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
    { name: 'User 1', elections: 'Election name', id: 'User’s SSN' },
    { name: 'User 2', elections: 'Election name', id: 'User’s SSN' },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSaveChanges = () => {
    // Handle save logic here
    console.log('Changes saved');
    setShowModal(false);
  };

  return (
    <div className="test p-2">
      <DataTable columns={columns} data={data} showActions />
    </div>
  );
};

export default ViewUsers;
