 



import { IoMdSearch } from "react-icons/io";
import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for routing

// Define the Navbar component
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">CO-Lancer</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/projects/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/circular/Circular">Circular</Link>
            </li>
           <li className="nav-item">
            <Link className="nav-link active" to="/Competition/Competition">Competition</Link>
           </li>
              {/* Profile Dropdown */}
           <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle active"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Profile
              </a>
              <ul className="dropdown-menu">
                <li>
                <Link to="/profile/view-profile" className="btn btn-primary">view profile</Link>
                </li>
                 
            
     <li className="nav-item">
         <Link className="nav-link active" to="/ECAcoins/ECAcoins">ECAcoins</Link>
        </li>
     
                <li>

                <Link className="nav-link active" to="/Login/LogOut">Log Out</Link>
                {/*  <a className="dropdown-item" href="#" >Log Out</a>*/}
                </li>
              </ul>
            </li>
          
          </ul>
          
          {/* <form className="d-flex " action='/search/profiles/' role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          
          </form> */}
           {/* Search Bar */}
           <div className="flex justify-between items-center gap-4">
            <div className="relative group d-none d-sm-block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary position-absolute top-50 translate-middle-y end-3" />
            </div>
          </div>
        <ul className="navbar-nav  mb-2 mb-lg-0">
        <li>
          <Link className="nav-link active" to="/Login/Login">Login </Link>
          </li>
        <li>
          <Link className="nav-link active" to="/Signup/Signup">SignUp</Link>
        </li>
        </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 


 