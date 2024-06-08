import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataTable from "../../../components/datatable";
import { getCandidates } from "../../../helper/helper";
import AddIcon from "../../../assets/add.png"


const ViewCandidates: React.FC = () => {



  const columns = [
    { header: 'Name', accessor: 'fullName' },
    { header: 'qualification', accessor: 'qulification' },
    { header: 'graduate', accessor: 'graduate' },
  ];



  const [candidates, setCandidates] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reload , setReload] = useState<boolean>(false);

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
        setReload(true);
      }
    };
    fetchUserDetails();
  }, [reload]);



  return (
    <div className="test p-2">
      {candidates&&<DataTable id="fullName" deleteId="candidateId" columns={columns} data={candidates} showActions routes={{
        viewRoute: "ViewCandidateProfile",
        deleteRoute: "DeleteCandidate",
        editRoute: "EditCandidate"
      }} deleteText={"Are you sure you want to delete this candidate?"} hasEdit={true} />}
      <div className="text-center">
        <Link to={`AddCandidate`} className="btn ">
          <img src={AddIcon} width={66} height={66} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ViewCandidates;
