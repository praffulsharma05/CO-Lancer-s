// Importing React and necessary components for routing
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Importing the Navbar component
import Home from './components/Home/Home'; // Import Home page component
import Projects from './components/projects/Projects'; // Import Projects page component
import Circular from './components/Circular/Circular'; // Import Circular page component
import Competition from './components/Competition/Competition'; // Import Competition page component
import Footer from './components/Footer/Footer'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Signup from './components/SignUp/Signup';
import ViewProfile from './components/Profile/ViewProfile';  // Assuming you have a ViewProfile component
import Login from './components/Login/Login';  // Assuming you have a Settings component
import LogOut from './components/Login/LogOut';  // Assuming you have a LogOut component
import ECACoins from './components/ECAcoins/ECAcoins';
import MessageBox from './components/Message/MessageBox';
const App = () => {
  return (
    <Router> {/* Set up React Router for routing */}
      <Navbar /> {/* Rendering Navbar component */}
      <Routes> {/* Define routes for each page */}
        <Route path="/Home/Home" element={<Home />} /> {/* Home page */}
        <Route path="/projects/projects" element={<Projects />} /> {/* Projects page */}
        <Route path="/circular/Circular" element={<Circular />} /> {/* Circular page */}
        <Route path="/competition/Competition" element={<Competition />} />  
        
        <Route path="/Profile/view-profile" element={<ViewProfile />} />
        <Route path="/Login/Login" element={<Login />} />
        <Route path="/Login/logout" element={<LogOut />} />
        <Route path='/Signup/Signup' element={<Signup/>}/>
           <Route path='/ECAcoins/ECAcoins' element={<ECACoins/>}/>
           {/* <Route path='/Message/MessageBox' element={<MessageBox/>} />*/}
        </Routes> 
 <MessageBox/>
      <Footer/>
      
    </Router>
  );
};

export default App; // Don't forget to export the component
