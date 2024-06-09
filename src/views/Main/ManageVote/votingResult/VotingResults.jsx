import React, { useState, useEffect } from 'react';
import './VotingResults.css';
import ahly from '../../../../assets/elections/ahly.png';
import { useParams, useNavigate } from 'react-router-dom';
import { calculatePercentageFromVotes, GetCategoryById } from "../../../../helper/helper";
import { getAuthUser } from '../../../../../localStorage';


const VotingResults = () => {


    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const { id } = useParams();
    const [election, setElection] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // NOTE : useEffect for the electionDetails api
    const user = getAuthUser()
    const token = user.token
    console.log(token, id);
    useEffect(() => {
        const fetchElectionDetails = async () => {
            try {
                const response = await GetCategoryById(id, token)
                console.log(response);
                const data = response
                console.log(data);
                console.log(data.candidateDtos);
                data.candidateDtos = calculatePercentageFromVotes(data.candidateDtos)
                console.log(data.candidateDtos);

                setElection(data);
                console.log(election);
            } catch (err) {
                setError(err.message);
                console.log(err);

            } finally {
                setLoading(false);
            }
        };

        fetchElectionDetails();
    }, [id]);

    return (
        <>
            {election != null && <div className="voting-results">
                <h2 className="main-vote-title">Make your choice!</h2>
                <div className="card px-2 mx-auto">
                    <div className="card-header">
                        <img src={`data:image/png;base64,${election?.categoryLogo}`} alt="Al-Ahly Club Logo" className="club-logo" />
                        <div className="card-title">{election?.name}</div>
                    </div>
                    <div className="card-body">
                        {election.candidateDtos != null && election.candidateDtos.map(candidate => (
                            <div className="candidate" key={candidate.name}>
                                <span className="candidate-name">{candidate.name}</span>
                                <div className="bar">
                                    <div
                                        className="fill"
                                        style={{
                                            width: `${candidate.percentage}%`,
                                            background: "red"
                                        }}
                                    ></div>
                                </div>
                                <span className="percentage">{candidate.percentage}</span>
                            </div>
                        ))}
                    </div>
                    <div className="ms-3">
                        <p>The election will end on: {election.dateOfEndVoting}</p>
                    </div>
                    <div className="text-center mt-4">
                        <button
                            onClick={handleBack}
                            className="btn secondary-bg text-black"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div >}
        </>
    );
};

export default VotingResults;