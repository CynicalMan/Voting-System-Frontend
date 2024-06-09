import React, { useState, useEffect } from 'react';
import './Voting.css';
import { Link, useNavigate } from 'react-router-dom';
import { getVotings, GetCategoryById } from '../../../helper/helper'; 
import { getAuthUser } from '../../../../localStorage';
import Modal from '../../../components/modal';

const VotingPage = () => {
    const [data, setData] = useState([]);
    const user = getAuthUser();
    const token = user.token;
    const navigate = useNavigate();
    const [modalText, setModalText] = useState("");
    
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
    }, [token]); 

    const handleVoteBtn = async (id) => {
        try {
            console.log(id);
            const categoryData = await GetCategoryById(id, token);
            console.log(categoryData);
            if (!categoryData) {
                console.log("Category data not found");
                return;
            }
            if (categoryData === "You don't have permissions to Vote in this Voting") {
                setModalText("You don't have permissions to Vote in this Voting");
            } else {
                navigate(`/vote/${categoryData.id}`);
            }
            console.log(categoryData);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCloseModal = () => {
        setModalText("");
    };

    return (
        <div className="voting-page container">
            <main className="main-content row">
                <h2 className="main-voting-title">Make your choice!</h2>
                <div className="election-list col-9">
                    {data != null ? data.map((election, index) => (
                        <div className="election-card" key={index}>
                            <img src={`data:image/png;base64,${election.logo}`} alt={election.alt} className="election-logo" />
                            <div className="election-details">
                                <h3>{election.categoryName}</h3>
                                <p>{election.numberOfCandidates} Candidates</p>
                                <button onClick={() => handleVoteBtn(election.id)} className="vote-button text-decoration-none">Vote</button>
                            </div>
                        </div>
                    )) : <p>No Votings</p>}
                </div>
            </main>
            {modalText && (
                <Modal show={true} showCheckMark={false} onClose={handleCloseModal}>
                    {modalText}
                </Modal>
            )}
        </div>
    );
};

export default VotingPage;
