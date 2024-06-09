import React, { useState, useEffect } from 'react';
import './VotePage.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ViewIcon from "../../../../assets/view.png";
import CandIcon from "../../../../assets/cands.png";
import { addVote, GetCategoryById } from '../../../../helper/helper';
import { getAuthUser } from '../../../../../localStorage';
import Modal from '../../../../components/modal';

const VotePage = () => {
    const { id } = useParams();
    const user = getAuthUser();
    const token = user ? user.token : null;
    const [category, setCategory] = useState(null);
    const [candidates, setCandidates] = useState([]);
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [voteText,setVoteText] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!token) {
                    console.log("Token not found");
                    return;
                }

                const categoryData = await GetCategoryById(id, token);
                if (!categoryData) {
                    console.log("Category data not found");
                    return;
                }
                console.log(categoryData);
                setCategory(categoryData);
                setCandidates(categoryData.candidateDtos || []);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id, token]);

    const handleCandidateSelection = (candidateName) => {
        setSelectedCandidate(candidateName);
    };

    const handleVoting = async (e) => {
        e.preventDefault();
        try {
            console.log(selectedCandidate);
            const selectedCandId = candidates.find(f => f.name === selectedCandidate)
            console.log(selectedCandId);
            const dataSend = {
                categoryId: category.id,
                candidateId: selectedCandId.id
            }
            const response = await addVote(dataSend, token)
            console.log(response);
            navigate(`VotingResult/${category.id}`)
        } catch (error) {
            console.log(error.request.responseText);
            if(error.request.responseText === "You are already Voting in this category "){
                setVoteText("You are already Voting in this category ")
            }
            console.log(error);
        }
    }

    console.log(voteText);

    return (
        <div className="vote-page container">
            <main className='row'>
                <h2 className='main-vote-title'>Make your choice!</h2>
                {category && (
                    <div className="election-vote-card col-9 mx-auto">
                        <div className="election-vote-details">
                            <div className="d-flex">
                                <div className="">
                                    <img src={`data:image/png;base64,${category.categoryLogo}`} alt="Category Logo" className="election-logo" />
                                </div>
                                <div className="">
                                    <h3>{category.name || 'Category Name'}</h3>
                                    <div className="d-flex">
                                        <img src={CandIcon} height={33} width={33} alt="" />
                                        <p>Choose your one candidate.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="candidates w-75 ms-auto">
                                {candidates.map((candidate, index) => (
                                    <label className='d-flex justify-content-between' key={index}>
                                        <span>
                                            <input
                                                type="radio"
                                                name="candidate"
                                                value={candidate.name}
                                                className='me-2'
                                                checked={selectedCandidate === candidate.name}
                                                onChange={() => handleCandidateSelection(candidate.name)}
                                            />
                                            {candidate.name}
                                        </span>
                                        <Link to={`/CandidateProfile/${candidate.name}`} className="btn ">
                                            <img src={ViewIcon} width={26} height={24} alt="" />
                                        </Link>
                                    </label>
                                ))}
                                <button onClick={handleVoting} className="vote-button text-decoration-none">Vote</button>
                            </div>
                        </div>
                    </div>
                )}
                {voteText !== "" && (
                    <Modal show={true} onClose={() => setVoteText("")} showCheckMark={false}>
                        {voteText}
                    </Modal>
                )}
            </main>
        </div>
    );
};

export default VotePage;
