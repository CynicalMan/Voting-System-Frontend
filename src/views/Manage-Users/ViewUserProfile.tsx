import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ahly from "../../assets/elections/ahly.png";

type ViewUserProfileProps = {};

const ViewUserProfile: React.FC<ViewUserProfileProps> = () => {
  const { id } = useParams<{ id: string }>();
  // const [election, setElection] = useState<any>(null);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // NOTE : useEffect for the ViewUserProfile api

  // useEffect(() => {
  //   const fetchViewUserProfile = async () => {
  //     try {
  //       const response = await fetch(`/api/elections/${id}`);
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch election details');
  //       }
  //       const data = await response.json();
  //       setElection(data);
  //     } catch (err:any) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchViewUserProfile();
  // }, [id]);

  console.log(id);

  const election: any = {
    image: ahly,
    title: "Al-Ahly Club presidency elections.",
    candidates: [
      { name: "Mahmoud Al-Khatib", percentage: "83%" },
      { name: "Khaled Suleiman", percentage: "12%" },
      { name: "Tariq Qandil", percentage: "5%" },
    ],
    endDate: "25/5/2024",
  };

  return (
    <div>
      {election ? (
        <div>
          <div className="">
            <div className="">
              <img src={election.image} alt="" />
            </div>
            <div className="">
              <h4 className="mb-2">{election.title}</h4>
              <div className="">
                {election.candidates.map((cand: { name: string | undefined; percentage: string; },index: number)=> (
                  <div className="" key={index}>
                  <p className="me-1">{cand.name}</p>
                  <div style={{
                    width: cand.percentage,
                    height: "20px",
                    background: "linear-gradient(to right, #FDE767, #F3B95F, #D04848)"
                  }}></div>
                </div>
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <p>The election will end on: {election.endDate}</p>
          </div>
          <div className="">
            <Link to={`/ManageElections`} className="btn secondry-bg text-black">
              Back
            </Link>
          </div>
        </div>
      ) : (
        <div>Election not found</div>
      )}
    </div>
  );
};

export default ViewUserProfile;
