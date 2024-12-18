 

// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('johndoe@example.com');
//   const [password, setPassword] = useState('');

//   const handleSave = () => {
//     // Here you can add logic to save the changes
//     alert('Changes Saved!');
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#f4f6f9' }}>
//       <div className="card shadow-sm p-4 rounded" style={{ width: '500px', backgroundColor: '#fff' }}>
//         <h2 className="text-center mb-4" style={{ color: '#333', fontFamily: 'Helvetica, Arial, sans-serif' }}>Login</h2>

//         <div className="mb-3">
//           <label htmlFor="email" className="form-label" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Email Address</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{ borderRadius: '4px', borderColor: '#ccc', transition: 'all 0.3s ease' }}
//             placeholder="Enter your email"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="password" className="form-label" style={{ fontSize: '1.1rem', fontWeight: '500' }}>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ borderRadius: '4px', borderColor: '#ccc', transition: 'all 0.3s ease' }}
//             placeholder="Enter your password"
//           />
//         </div>

//         <button
//           onClick={handleSave}
//           className="btn btn-primary w-100 py-2 rounded"
//           style={{
//             backgroundColor: '#007bff',
//             borderColor: '#007bff',
//             fontSize: '1.1rem',
//             fontWeight: '500',
//             transition: 'transform 0.2s ease, box-shadow 0.3s ease',
//           }}
//           onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
//           onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
//         >
//           Login
//         </button>

//         {/* Optional: Forgot Password link */}
//         <div className="text-center mt-3">
//           <a href="#!" style={{ fontSize: '0.9rem', color: '#007bff' }}>Forgot Password?</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    // Here you can add logic to save the changes
    alert('Changes Saved!');
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: '100vh', backgroundColor: '#4d46c8' }}
    >
      {/* Glassmorphism effect added to the card */}
      <div
        className="card shadow-sm p-4 rounded"
        style={{
          width: '500px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
          backdropFilter: 'clear(5px)', // Apply blur effect
          borderRadius: '12px',
          border: 'none',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Slight shadow for depth
        }}
      >
        <h2
          className="text-center mb-4"
          style={{ color: 'dark', fontFamily: 'Helvetica, Arial, sans-serif' }}
        >
          Login
        </h2>

        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
            style={{ fontSize: '1.1rem', fontWeight: '500', color: 'black' }}
          >
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              borderRadius: '4px',
              borderColor: '#ccc',
              transition: 'all 0.3s ease',
              backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight opacity for input fields
            }}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="form-label"
            style={{ fontSize: '1.1rem', fontWeight: '500', color: 'Black' }}
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              borderRadius: '4px',
              borderColor: '#ccc',
              transition: 'all 0.3s ease',
              backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight opacity for input fields
            }}
            placeholder="Enter your password"
          />
        </div>

        <button
          onClick={handleSave}
          className="btn btn-primary w-100 py-2 rounded"
          style={{
            backgroundColor: '#007bff',
            borderColor: '#007bff',
            fontSize: '1.1rem',
            fontWeight: '500',
            transition: 'transform 0.2s ease, box-shadow 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Login
        </button>

        {/* Optional: Forgot Password link */}
        <div className="text-center mt-3">
          <a href="#!" style={{ fontSize: '0.9rem', color: 'black' }}>
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
