import React, { useState, useEffect } from 'react';
import './Voting.css';
import { Link } from 'react-router-dom';
import { getVotings } from '../../../helper/helper'; 
import { getAuthUser } from '../../../../localStorage';

const VotingPage = () => {
    const [data, setData] = useState([]);
    const user = getAuthUser()
    const token = user.token
    console.log(token);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getVotings(token); 
                console.log(result);
                setData(result); 
            } catch (error) {
                console.log(error);
            }
        };

        fetchData(); 
    }, []); 

    

    return (
        <div className="voting-page container">
            <main className="main-content row">
                <h2 className="main-voting-title">Make your choice!</h2>
                <div className="election-list col-9">
                    {data ? data.map((election, index) => (
                        <div className="election-card" key={index}>
                            <img src={`data:image/png;base64,${election.logo}`} alt={election.alt} className="election-logo" />
                            <div className="election-details">
                                <h3>{election.categoryName}</h3>
                                <p>{election.numberOfCandidates}</p>
                                <Link to="/vote" className="vote-button text-decoration-none">Vote</Link>
                            </div>
                        </div>
                    )) : <p> No Votings </p>}
                </div>
            </main>
        </div>
    );
};

export default VotingPage;
