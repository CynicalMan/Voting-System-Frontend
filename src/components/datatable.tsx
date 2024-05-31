import React, { useState } from "react";
import "./styles/datatable.css";
import { Link } from "react-router-dom";
import Modal from "./modal";
import ViewIcon from "../assets/view.png";
import DeleteIcon from "../assets/delete.png";

type DataTableColumn = {
  header: string;
  accessor: string;
};

type DataTableProps = {
  columns: DataTableColumn[];
  data: { [key: string]: any }[];
  showActions: boolean;
  routes: {
    viewRoute : string,
    deleteRoute: string
  };
  deleteText: string;
  className?: string;
};

const DataTable: React.FC<DataTableProps> = ({ columns, data,showActions = true,routes,deleteText, className }) => {
  const [showModal, setShowModal] = useState(false);

  console.log(data,routes);
  

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSaveChanges = () => {
    // Handle save logic here
    console.log("Changes saved");
    setShowModal(false);
  };

  return (
    <div className="table-responsive ">
      <table
        className={`table table-bordered table-hover table-sm  ${className}`}
      >
        <thead className="table-header text-black">
          <tr>
            {columns.map((column) => (
              <th className="text-center text-black" key={column.accessor}>
                {column.header}
              </th>
            ))}
            {showActions && <th className="text-center" key={"Actions"}>
              Actions
            </th>}
          </tr>
        </thead>
        <tbody className="text-center secondry-bg secondry-color">
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.accessor}>{row[column.accessor]}</td>
              ))}
              {showActions && <div className="d-flex justify-content-center">
                <Link to={`${routes.viewRoute}/1`} className="btn ">
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
                  <p className="fw-600 fs-5">
                    {deleteText}
                  </p>
                </Modal>
              </div>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
