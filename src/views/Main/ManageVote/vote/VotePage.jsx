import React from 'react';
import './VotePage.css';
import ahly from "../../../../assets/elections/ahly.png";
import { Link } from 'react-router-dom';
import ViewIcon from "../../../../assets/view.png";
import CandIcon from "../../../../assets/cands.png";

const VotePage = () => {
    const candidates = [
        { name: "Mahmoud Al-Khatib", profileRoute: "CandidateProfile" },
        { name: "Candidate 2", profileRoute: "CandidateProfile2" },
        { name: "Candidate 3", profileRoute: "CandidateProfile3" }
    ];

    return (
        <div className="vote-page container">
            <main className='row'>
                <h2 className='main-vote-title'>Make your choice!</h2>
                <div className="election-vote-card col-9 mx-auto">
                    <div className="election-vote-details">
                        <div className="d-flex">
                            <div className="">
                                <img src={ahly} alt="Al-Ahly Club" className="election-logo" />
                            </div>
                            <div className="">
                                <h3>Al-Ahly Club presidency elections.</h3>
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
                                        <input type="radio" name="candidate" value={candidate.name} className='me-2' />
                                        {candidate.name}
                                    </span>
                                    <Link to={candidate.profileRoute} className="btn ">
                                        <img src={ViewIcon} width={26} height={24} alt="" />
                                    </Link>
                                </label>
                            ))}
                            <Link to={`VotingResult`} className="vote-button text-decoration-none">Vote</Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default VotePage;
