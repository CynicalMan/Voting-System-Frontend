import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";
import ViewIcon from "../assets/view.png";
import DeleteIcon from "../assets/delete.png";
import EditIcon from "../assets/edit.png";

type DataTableItemProps = {
    row: { [key: string]: any };
    columns: { accessor: string }[];
    id: string;
    routes: {
        viewRoute: string;
        deleteRoute: string;
        editRoute?: string;
    };
    deleteText: string;
    deleteId?: string;
    hasEdit: boolean;
    showActions: boolean;
    onReload: () => void;
};

const DataTableItem: React.FC<DataTableItemProps> = ({
    row,
    columns,
    id,
    routes,
    deleteText,
    hasEdit,
    onReload,
    showActions = true,
    deleteId,
}) => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleSaveChanges = async (id: string) => {
        try {
        const response = await fetch(
            `https://localhost:7285/api/Admin/${routes.deleteRoute}/${id}`,
            {
            method: "DELETE",
            }
        );

        if (!response.ok) {
            throw new Error("Failed to delete");
        }
        onReload();
        } catch (err: any) {
        setError(err.message);
        } finally {
        setLoading(false);
        setShowModal(false);
        }
    };

    return (
        <tr>
        {columns.map((column) => (
            <td key={column.accessor}>{row[column.accessor]}</td>
        ))}
        <td>
            {showActions && (
            <div className="d-flex justify-content-center">
                <Link to={`${routes.viewRoute}/${row[id]}`} className="btn">
                <img src={ViewIcon} width={26} height={24} alt="" />
                </Link>
                {hasEdit && (
                <Link to={`${routes.editRoute}/${row[id]}`} className="btn">
                    <img src={EditIcon} width={26} height={24} alt="" />
                </Link>
                )}
                <button onClick={handleOpenModal} className="btn">
                <img src={DeleteIcon} width={26} height={24} alt="" />
                </button>
                <Modal
                show={showModal}
                onClose={handleCloseModal}
                onSave={handleSaveChanges}
                deleteId={row[deleteId] || row[id]}
                >
                <p className="fw-600 fs-5">{deleteText}</p>
                </Modal>
            </div>
            )}
        </td>
        </tr>
    );
};

export default DataTableItem;
