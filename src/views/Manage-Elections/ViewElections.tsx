import { Link, useParams } from "react-router-dom";
import DataList from "../../components/datalist";
import parliament from "../../assets/elections/parliament.png";
import ahly from "../../assets/elections/ahly.png";
import egypt from "../../assets/elections/egypt.png";
import AddIcon from "../../assets/add.png";
import { useState, useEffect } from "react";
import { getElections } from "../../helper/helper";

const ViewElections: React.FC = () => {

  const [election, setElection] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reload , setReload] = useState<boolean>(false);

  useEffect(() => {
    const fetchElectionDetails = async () => {
      try {
        const data = await getElections();
        console.log(data);
        setElection(data);
        setReload(true);
      } catch (err:any) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setLoading(false);
        setReload(true);
        console.log(reload);
        
      }
    };

    fetchElectionDetails();
  },[]);
console.log(election);


  return (
    <div className="test ">
      {election&&<DataList data={election} deleteText={`Are you sure you want \n to delete this election?`} />}
      <div className="text-center">
        <Link to={`AddElection`} className="btn ">
          <img src={AddIcon} width={66} height={66} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default ViewElections;
