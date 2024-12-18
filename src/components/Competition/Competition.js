
// import React from 'react';
// import './Competition.css';  // Import the CSS for styling
// const Competition = () => {
//   return (
//     <div className="competition-section">
//       <h2>Upcoming Competitions</h2>
//       <p>
//         Get ready for the most exciting competition of the year! Participate
//         and win amazing prizes while showcasing your skills. Don't miss out on
//         the fun and challenges ahead.
//       </p>

//       {/* Button to register or view details */}
//       <button className="btn">Join Now</button>

//       {/* Information boxes to highlight details */}
//       <div className="competition-info">
//         <div className="info-box">
//           <h3>Eligibility</h3>
//           <p>Anyone above 18 years of age can participate.</p>
//         </div>
//         <div className="info-box">
//           <h3>Prizes</h3>
//           <p>Exciting prizes for the winners!</p>
//         </div>
//         <div className="info-box">
//           <h3>Deadline</h3>
//           <p>Submit your entries before the final date.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Competition;



import React, { useState, useEffect } from 'react';
import './Competition.css';  // Import the CSS for styling
import { Modal, Button } from 'react-bootstrap'; // For modal dialog
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // For social media icons
import Divider from '@mui/material/Divider'

const Competition = () => {
  const [showModal, setShowModal] = useState(false);  // State for showing the registration modal
  const [timeLeft, setTimeLeft] = useState(null);  // State to hold the countdown timer value
  const [participantCount, setParticipantCount] = useState(102);  // Placeholder for participant count

  // Function to start the countdown timer
  useEffect(() => {
    const targetDate = new Date('2024-12-31T23:59:59'); // Competition deadline
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now;
      if (timeDifference <= 0) {
        clearInterval(intervalId);
        setTimeLeft('Competition Ended');
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  // Function to handle modal open and close
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <div className="competition-section">
      <h2>Upcoming Competitions</h2>
      <p>
        Get ready for the most exciting competition of the year! Participate
        and win amazing prizes while showcasing your skills. Don't miss out on
        the fun and challenges ahead.
      </p>

      {/* Countdown Timer */}
      <div className="countdown">
        <h4>Time Left: {timeLeft || 'Loading...'}</h4>
      </div>

      {/* Button to register or view details */}
      <button className="btn active" style={{backgroundColor: 'white'}} onClick={handleModalShow}>Join Now</button>

      {/* Modal for registration or more details */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register for the Competition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Fill in the details below to register for the competition.</p>
          <input type="text" placeholder="Your Name" className="form-control mb-3" />
          <input type="email" placeholder="Your Email" className="form-control mb-3" />
          <Button variant="primary" onClick={handleModalClose}>Submit</Button>
        </Modal.Body>
      </Modal>

      {/* Information boxes to highlight details */}
      <div className="competition-info">
        <div className="info-box">
          <h3>Eligibility</h3>
          <h6>Anyone above 18 years of age can participate.</h6>
        </div>
        <div className="info-box">
          <h3>Prizes</h3>
          <h6>Exciting prizes for the winners!</h6>
        </div>
        <div className="info-box">
          <h3>Deadline</h3>
          <h6>Submit your entries before the final date.</h6>
        </div>
      </div>

      {/* Participant Count */}
      <div className="participant-count " >
        <p>{participantCount} Participants have joined so far!</p>
      </div>

      {/* Social Share Buttons */}
      <div className="social-share">
        <p>Share this competition:</p>
       
      </div>
    </div>
  );
}

export default Competition;
