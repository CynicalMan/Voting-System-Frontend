import React from 'react';
import './VotingResults.css';
import ahly from '../../../../assets/elections/ahly.png';

const candidates = [
    { name: 'Mahmoud Al-Khatib', percentage: "83%", color: '#E74C3C' },
    { name: 'Khaled Suleiman', percentage: "12%", color: '#F39C12' },
    { name: 'Tariq Qandil', percentage: "5%", color: '#F1C40F' }
];

const VotingResults = () => {
    return (
        <div className="voting-results">
            <h2 className="main-vote-title">Make your choice!</h2>
            <div className="card px-2 mx-auto">
                <div className="card-header">
                    <img src={ahly} alt="Al-Ahly Club Logo" className="club-logo" />
                    <div className="card-title">Al-Ahly Club presidency elections.</div>
                </div>
                <div className="card-body">
                    {candidates.map(candidate => (
                        <div className="candidate" key={candidate.name}>
                            <span className="candidate-name">{candidate.name}</span>
                            <div className="bar">
                                <div
                                    className="fill"
                                    style={{
                                        width: candidate.percentage,
                                        background: candidate.color
                                    }}
                                ></div>
                            </div>
                            <span className="percentage">{candidate.percentage}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default VotingResults;