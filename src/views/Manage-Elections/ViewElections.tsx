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

  useEffect(() => {
    const fetchElectionDetails = async () => {
      try {
        const data = await getElections();
        console.log(data);
        setElection(data);
      } catch (err:any) {
        setError(err.message);
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchElectionDetails();
  },[]);
console.log(election);


  // const listData = [
  //   {
  //     id: 1,
  //     logo: ahly,
  //     title: "Al-Ahly Club presidency elections.",
  //     candidateNum: 3,
  //   },
  //   {
  //     id: 2,
  //     image: egypt,
  //     title: "Presidential elections of the Arab Republic of Egypt",
  //     candidateNum: 4,
  //   },
  //   {
  //     id: 3,
  //     image: parliament,
  //     title: `Elections for speaker of the House 
  //   of Representatives (Egypt)`,
  //     candidateNum: 3,
  //   },
  // ];

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
