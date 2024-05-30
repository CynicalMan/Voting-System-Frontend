import React, { useState } from "react";
import "./styles/datalist.css";
import { Link } from "react-router-dom";
import ViewIcon from "../assets/view.png";
import DeleteIcon from "../assets/delete.png";
import Modal from "./modal";

type DataListProps = {
  data: { [key: string]: any }[];
  className?: string;
};

const DataList: React.FC<DataListProps> = ({ data, className }) => {
  console.log(data, className);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSaveChanges = () => {
    // Handle save logic here
    console.log("Changes saved");
    setShowModal(false);
  };

  return (
    <div className="datalist">
      {data.map((row, index) => (
        <div className="data-item d-flex" key={index}>
          <div className="data-image">
            <img src={row.image} alt="" />
          </div>
          <div className="data-content">
            <h4>{row.title}</h4>
            <p>{row.candidateNum} Candidates</p>
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
            >
              <p className="fw-600 fs-5">Are you sure you want <br/> to delete this election?</p>
            </Modal>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataList;
