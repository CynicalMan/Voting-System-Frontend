import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ahly from "../../assets/elections/ahly.png";

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
        const response = await fetch(`/api/elections/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch election details');
        }
        const data = await response.json();
        setElection(data);
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchElectionDetails();
  }, [id]);

  console.log(id);

  // const election: any = {
  //   image: ahly,
  //   title: "Al-Ahly Club presidency elections.",
  //   candidates: [
  //     { name: "Mahmoud Al-Khatib", percentage: "83%" },
  //     { name: "Khaled Suleiman", percentage: "12%" },
  //     { name: "Tariq Qandil", percentage: "5%" },
  //   ],
  //   endDate: "25/5/2024",
  // };

  return (
    <div>
      {election ? (
        <div className="test p-4">
          <div className="d-flex">
            <div className="data-image">
              <img src={election.image} alt="" />
            </div>
            <div className="w-100">
              <h4 className="mb-3">{election.title}</h4>
              <div className="w-75">
                {election.candidates.map(
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
                      }}>{cand.percentage}</span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="ms-3">
            <p>The election will end on: {election.endDate}</p>
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
