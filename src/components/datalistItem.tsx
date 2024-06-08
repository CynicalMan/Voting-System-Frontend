import React, { useState } from "react";
import { Link } from "react-router-dom";
import ViewIcon from "../assets/view.png";
import DeleteIcon from "../assets/delete.png";
import Modal from "./modal";

type DataListItemProps = {
    item: { [key: string]: any };
    deleteText: string;
    onDelete: () => void;
};

const DataListItem: React.FC<DataListItemProps> = ({item,deleteText,onDelete}) => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleDelete = async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `https://localhost:7285/api/Admin/DeleteElection/${item.id}`,
                {
                    method: "DELETE",
                }
            );
            if (!response.ok) {
                throw new Error("Failed to delete election");
            }
            onDelete();
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
        <div className="data-item d-flex">
        <div className="data-image">
            <img src={`data:image/png;base64,${item.logo}`} alt="" />
        </div>
        <div className="data-content">
            <h4>{item.categoryName}</h4>
            <p>{item.numberOfCandidates} Candidates</p>
        </div>
        <div className="data-actions d-flex flex-column">
            <Link to={`ElectionDetails/${item.id}`} className="btn ">
            <img src={ViewIcon} width={26} height={24} alt="" />
            </Link>
            <button onClick={handleOpenModal} className="btn">
                <img src={DeleteIcon} width={26} height={24} alt="" />
            </button>
            {showModal && (
            <Modal
                show={showModal}
                onClose={handleCloseModal}
                onSave={handleDelete}
                deleteId={item.id}
            >
                <p className="fw-600 fs-5 ">{deleteText}</p>
            </Modal>
            )}
        </div>
        </div>
    );
};

export default DataListItem;
