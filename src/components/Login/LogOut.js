// import React from 'react';
// import { Link } from 'react-router-dom';

// const LogOut = () => {
//   return (
//     <div className="container mt-5"  style={{ backgroundColor: "#044e42", color: "white", padding: "2rem 0" }}>
//       <h2>Log Out</h2>
//       <div className="card">
//         <div className="card-body">
//           <h5 className="card-title">Are you sure you want to log out?</h5>
          
//           <div className="button-group mt-4">
//             <Link to="/" className="btn btn-danger" >Log Out</Link>
//             <Link to="/profile" className="btn btn-secondary ms-3">Cancel</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LogOut;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session data or perform any logout-related operations here
    // Example: localStorage.removeItem('userToken');
    console.log("User logged out."); // Optional: Add logging for debugging

    // Redirect to the home page
    navigate('/Home/Home');
  };

  return (
    <div
      className="container mt-5"
      style={{ backgroundColor: "#044e42", color: "white", padding: "2rem 0" }}
    >
      <h2>Log Out</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Are you sure you want to log out?</h5>

          <div className="button-group mt-4">
            <button onClick={handleLogout} className="btn btn-danger">
              Log Out
            </button>
            <button
              onClick={() => navigate('/profile/profile')}
              className="btn btn-secondary ms-3"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOut;
