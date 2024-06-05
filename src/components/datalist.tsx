import React, { useEffect, useState } from "react";
import "./styles/datalist.css";
import { Link } from "react-router-dom";
import ViewIcon from "../assets/view.png";
import DeleteIcon from "../assets/delete.png";
import Modal from "./modal";

type DataListProps = {
  data: { [key: string]: any }[];
  deleteText: string;
  className?: string;
};

const DataList: React.FC<DataListProps> = ({ data, deleteText, className }) => {
  console.log(data.stack, className);

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reload, setReload] = useState<boolean>(false);


  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSaveChanges = async (id: string) => {
    // Handle save logic here
    try {
      console.log(id);
      
      const response = await fetch(`https://localhost:7285/api/Admin/DeleteElection/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error("Failed to delete election");
      }
      setReload(!reload)
      console.log("Election deleted");
    } catch (err: any) {
      setError(err.message);
      console.log(error);
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  return (
    <div className="datalist">
      {data.map((row, index) => (
        <div className="data-item d-flex" key={index}>
          <div className="data-image">
            <img src={`data:image/png;base64,${row.logo}`} alt="" />
          </div>
          <div className="data-content">
            <h4>{row.categoryName}</h4>
            <p>{row.numberOfCandidates} Candidates</p>
          </div>
          <div className="data-actions d-flex flex-column">
            <Link to={`ElectionDetails/${row.id}`} className="btn ">
              <img src={ViewIcon} width={26} height={24} alt="" />
            </Link>
            <button onClick={handleOpenModal} className="btn">
              <img src={DeleteIcon} width={26} height={24} alt="" />
            </button>
            <Modal
              show={showModal}
              onClose={handleCloseModal}
              onSave={handleSaveChanges}
              deleteId={row.id}
            >
              <p className="fw-600 fs-5 ">{deleteText}</p>
            </Modal>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataList;
