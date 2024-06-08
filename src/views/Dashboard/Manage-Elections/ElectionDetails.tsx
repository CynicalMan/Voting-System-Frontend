import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { calculatePercentageFromVotes } from "../../../helper/helper";

type ElectionDetailsProps = {};

const ElectionDetails: React.FC<ElectionDetailsProps> = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const { id } = useParams<{ id: string }>();
  const [election, setElection] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // NOTE : useEffect for the electionDetails api

  useEffect(() => {
    const fetchElectionDetails = async () => {
      try {
        const response = await fetch(`https://localhost:7285/api/Admin/GetCategoryById/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch election details');
        }
        
        const data = await response.json();
        console.log(data);
        console.log(data.candidateDtos);
        data.candidateDtos = calculatePercentageFromVotes(data.candidateDtos)
        console.log(data.candidateDtos);
        
        setElection(data);
        console.log(election);
        

      } catch (err:any) {
        setError(err.message);
        console.log(err);
        
      } finally {
        setLoading(false);
      }
    };

    fetchElectionDetails();
  }, [id]);

  console.log(id);

  return (
    <div>
      {election ? (
        <div className="test p-4">
          <div className="d-flex">
            <div className="data-image">
              <img src={election.CategoryLogo} alt="" />
            </div>
            <div className="w-100">
              <h4 className="mb-3">{election.name}</h4>
              <div className="w-75">
                {election.candidateDtos!=null&&election.candidateDtos.map(
                  (
                    cand: { name: string | undefined; percentage: string },
                    index: number
                  ) => (
                    <div className="d-flex " key={index}>
                      <p className="w-40">{cand.name}</p>
                      <div className="w-75 d-flex">
                        <div
                        className="me-2"
                          style={{
                            width: cand.percentage,
                            height: "20px",
                            background: "#D04848",
                          }}
                        ></div>
                      <span style={{
                        width: "1%"
                      }}>{cand.percentage}%</span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="ms-3">
            <p>The election will end on: {election.dateOfEndVoting}</p>
          </div>
          <div className="text-center">
            <button
              onClick={handleBack}
              className="btn secondary-bg text-black"
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        <div>Election not found</div>
      )}
    </div>
  );
};

export default ElectionDetails;
