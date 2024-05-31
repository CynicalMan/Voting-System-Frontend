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
  id: string;
  deleteText: string;
  className?: string;
};

const DataTable: React.FC<DataTableProps> = ({ columns,id, data,showActions = true,routes,deleteText, className }) => {

  console.log(data,routes,columns);
  

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSaveChanges = async (id: string) => {
    // Handle save logic here
    try {
      const response = await fetch(`https://localhost:7285/api/Admin/${routes.deleteRoute}/${id}`, {
        method: 'DELETE',
      });
      console.log("removed");
      
      if (!response.ok) {
        throw new Error("Failed to delete");
      }
      console.log("deleted");
    } catch (err: any) {
      setError(err.message);
      console.log(error);
    } finally {
      setLoading(false);
      setShowModal(false);
    }
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
        <tbody className="text-center secondary-bg secondary-color">
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.accessor}>{row[column.accessor]}</td>
              ))}
              {showActions && <div className="d-flex justify-content-center">
                <Link to={`${routes.viewRoute}/${row[id]}`} className="btn ">
                  <img src={ViewIcon} width={26} height={24} alt="" />
                </Link>
                <button onClick={handleOpenModal} className="btn">
                  <img src={DeleteIcon} width={26} height={24} alt="" />
                </button>
                <Modal
                  show={showModal}
                  onClose={handleCloseModal}
                  onSave={handleSaveChanges}
                  deleteId={row[id]}

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
