
import { Link } from "react-router-dom";
import DataTable from "../../components/datatable";
import { useEffect, useState } from "react";
import Modal from "../../components/modal";
import AddIcon from "../../assets/add.png"
import { getCandidates } from "../../helper/helper";

const ViewCandidates: React.FC = () => {



  const columns = [
    { header: 'Name', accessor: 'fullName' },
    { header: 'qualification', accessor: 'qulification' },
    { header: 'graduate', accessor: 'graduate' },
  ];

  const data = [
    { name: 'John Doe', qulification: 'john@example.com', role: 'Admin' },
    { name: 'Jane Smith', qulification: 'jane@example.com', role: 'User' },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleSaveChanges = () => {
    // Handle save logic here
    console.log('Changes saved');
    setShowModal(false);
  };

  const [candidates, setCandidates] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // NOTE : useEffect for the UserDetails api
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const data = await getCandidates();
        console.log(data);
        setCandidates(data);
      } catch (err:any) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, []);



  return (
    <div className="test p-2">
      {candidates&&<DataTable columns={columns} data={candidates} showActions routes={{
        viewRoute: "ViewCandidateProfile",
        deleteRoute: "DeleteCandidate"
      }} deleteText={"Are you sure you want to delete this candidate?"} />}
      <div className="text-center">
        <Link to={`AddCandidate`} className="btn ">
          <img src={AddIcon} width={66} height={66} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ViewCandidates;
