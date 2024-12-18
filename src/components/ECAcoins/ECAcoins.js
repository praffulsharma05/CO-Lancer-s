// Importing necessary dependencies
import React, { useState } from 'react';
import './ECAcoins.css'; // Import CSS file for styling

const ECAcoins = () => {
    // State to manage user data
    const [ecaCoins, setEcaCoins] = useState(100); // Mock initial coins
    const [creditPoints, setCreditPoints] = useState(10); // Mock initial credit points
    const [projectsCompleted, setProjectsCompleted] = useState(3); // Mock project count
    const [transactionHistory, setTransactionHistory] = useState([]); // Mock transaction history

    // Function to handle earning ECA Coins
    const handleEarnCoins = () => {
        setEcaCoins(ecaCoins + 10); // Add 10 ECA Coins
        setProjectsCompleted(projectsCompleted + 1); // Increment completed projects
        setTransactionHistory([...transactionHistory, { type: 'Earned', amount: 10, date: new Date().toLocaleString() }]);
    };

    // Function to handle converting ECA Coins to credit points
    const handleConvertToCredits = () => {
        if (ecaCoins >= 50) {
            setEcaCoins(ecaCoins - 50); // Deduct 50 ECA Coins
            setCreditPoints(creditPoints + 1); // Add 1 credit point
            setTransactionHistory([...transactionHistory, { type: 'Converted', amount: 50, date: new Date().toLocaleString() }]);
        } else {
            alert("You need at least 50 ECA Coins to convert to credit points.");
        }
    };

    return (
        <div className="eca-coins-page">
            <header className="eca-header">
                <h1>ECA Coins</h1>
                <p>Your gateway to earning and converting freelance work into college credit points.</p>
            </header>

            <section className="eca-info">
                <h2>How It Works</h2>
                <ul>
                    <li>Work on projects or freelance tasks for local clients.</li>
                    <li>Earn ECA Coins as a reward for your efforts.</li>
                    <li>Convert ECA Coins into college credit points.</li>
                </ul>
            </section>

            <section className="eca-profile">
                <h2>Your Profile</h2>
                <div className="profile-card">
                    <p><strong>ECA Coins:</strong> {ecaCoins}</p>
                    <p><strong>Credit Points:</strong> {creditPoints}</p>
                    <p><strong>Projects Completed:</strong> {projectsCompleted}</p>

                    <div className="profile-actions">
                        <button className="earn-coins-btn" onClick={handleEarnCoins}>Earn ECA Coins</button>
                        <button className="convert-credits-btn" onClick={handleConvertToCredits}>Convert to Credit Points</button>
                    </div>
                </div>
            </section>

            {/* <section className="eca-features">
                <h2>Explore More Features</h2>
                <div className="feature-cards">
                    <div className="feature-card" onMouseEnter={() => console.log('Hovered Web Development')}>
                        <h3>Web Development</h3>
                        <p>Learn and apply the latest web technologies to build dynamic sites.</p>
                    </div>

                    <div className="feature-card" onMouseEnter={() => console.log('Hovered Graphic Design')}>
                        <h3>Graphic Design</h3>
                        <p>Master creative tools for stunning visuals and impactful designs.</p>
                    </div>

                    <div className="feature-card" onMouseEnter={() => console.log('Hovered Content Writing')}>
                        <h3>Content Writing</h3>
                        <p>Develop compelling content for websites, blogs, and social media.</p>
                    </div>

                    <div className="feature-card" onMouseEnter={() => console.log('Hovered AI/ML')}>
                        <h3>AI/ML</h3>
                        <p>Dive into machine learning and artificial intelligence projects.</p>
                    </div>
                </div>
            </section> */}

            <section className="eca-transaction-history">
                <h2>Transaction History</h2>
                <table className="transaction-table">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionHistory.length > 0 ? (
                            transactionHistory.map((transaction, index) => (
                                <tr key={index}>
                                    <td>{transaction.type}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.date}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No transactions yet.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>

            <footer className="eca-footer">
                <p>&copy; 2024 ECA Coins. Empowering College Students Through Freelancing.</p>
            </footer>
        </div>
    );
};

export default ECAcoins;
