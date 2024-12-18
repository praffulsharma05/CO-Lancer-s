import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Slider from '@mui/material/Slider'

const ViewProfile = () => {
  // State to manage the profile and projects
  const [profileImage, setProfileImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Toggle for editing mode
  const [name, setName] = useState("John Doe");
  const [bio, setBio] = useState("I am a passionate Web Developer with a focus on building beautiful and functional websites and applications.");
  const [skills, setSkills] = useState(["JavaScript (React, Node.js)", "HTML, CSS, and SASS", "Git & GitHub", "UI/UX Design", "Responsive Web Design"]);
  const [projects, setProjects] = useState([
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my skills and projects.',
      image: 'https://via.placeholder.com/300',
      demoLink: 'https://example.com/portfolio',
      githubLink: 'https://github.com/johndoe/portfolio',
    },
    {
      title: 'Task Manager App',
      description: 'A full-stack task management app built with React and Node.js.',
      image: 'https://via.placeholder.com/300',
      demoLink: 'https://example.com/task-manager',
      githubLink: 'https://github.com/johndoe/task-manager',
    },
    {
      title: 'Weather App',
      description: 'A weather forecasting app using the OpenWeather API.',
      image: 'https://via.placeholder.com/300',
      demoLink: 'https://example.com/weather',
      githubLink: 'https://github.com/johndoe/weather',
    }
  ]);

  // Handle image upload
  const handleImageUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedProjects = [...projects];
        updatedProjects[index].image = reader.result;
        setProjects(updatedProjects);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle adding a new project
  const handleAddProject = () => {
    const newProject = {
      title: "New Project",
      description: "Description of new project.",
      image: "https://via.placeholder.com/300",
      demoLink: "",
      githubLink: ""
    };
    setProjects([...projects, newProject]);
  };

  // Handle edit toggle
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Handle skills edit
  const handleSkillsChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  return (
    <div className="container mt-5"  style={{ backgroundColor: '#4d46c8' }}>
      <div className="row">
        {/* Sidebar for navigation (dashboard style) */}
        <div className="col-md-3"  >
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body text-center">
              {/* Display the user's profile picture */}
              <div className="d-flex flex-column align-items-center mb-4">
                {/* Show uploaded image or default icon */}
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="rounded-circle mb-3 profile-image"
                    style={{ width: 90, height: 90, objectFit: 'cover' }}
                  />
                ) : (
                  <FaUserCircle size={90} className="me-3 text-primary mb-3" />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, -1)} // -1 for profile image
                  className="form-control-file mb-3"
                  id="profileImageUpload"
                />
              </div>

              <h5 className="card-title text-dark font-weight-bold">
                {isEditing ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  />
                ) : (
                  name
                )}
              </h5>
              <p className="card-text text-muted">Web Developer</p>
              <div className="d-flex justify-content-center gap-3">
                <a href="https://github.com" className="text-dark"><FaGithub size={28} /></a>
                <a href="https://linkedin.com" className="text-dark"><FaLinkedin size={28} /></a>
                <a href="https://twitter.com" className="text-dark"><FaTwitter size={28} /></a>
              </div>

              <button className="btn btn-primary mt-3" onClick={handleEditToggle}>
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <div className="card mb-4 shadow-lg border-0 rounded-3">
            <div className="card-body" >
              <h4 className="card-title text-dark" >About Me</h4>
              {isEditing ? (
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="form-control"
                  rows="3"
                />
              ) : (
                <p className="card-text text-dark">{bio}</p>
              )}
            </div>
          </div>

          <div className="card mb-4 shadow-lg border-0 rounded-3" style={{ backgroundColor: '' }}>
            <div className="card-body">
              <h4 className="card-title text-dark">Skills</h4>
              {isEditing ? (
                <div>
                  {skills.map((skill, index) => (
                    <input
                      key={index}
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillsChange(index, e.target.value)}
                      className="form-control mb-2"
                    />
                  ))}
                  <button className="btn btn-secondary mt-2" onClick={() => setSkills([...skills, ""])}>Add Skill</button>
                </div>
              ) : (
                <ul className="text-dark">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Projects Section */}
          <div className="card mb-4 shadow-lg border-0 rounded-3">
            <div className="card-body" >
              <h1 className="card-title text-white">Projects</h1>
              <p className="card-text text-white Active">Check out some of my recent projects below:</p>
              <div className="row">
                {projects.map((project, index) => (
                  <div key={index} className="col-md-4 mb-3">
                    <div className="card shadow-lg border-0 rounded-3">
                      <img
                        src={project.image}
                        className="card-img-top rounded-3"
                        alt={project.title}
                      />
                      <div className="card-body" style={{ backgroundColor: '' }}>
                        {isEditing ? (
                          <>
                            <input
                              type="text"
                              value={project.title}
                              onChange={(e) => {
                                const newProjects = [...projects];
                                newProjects[index].title = e.target.value;
                                setProjects(newProjects);
                              }}
                              className="form-control mb-2"
                            />
                            <textarea
                              value={project.description}
                              onChange={(e) => {
                                const newProjects = [...projects];
                                newProjects[index].description = e.target.value;
                                setProjects(newProjects);
                              }}
                              className="form-control mb-2"
                            />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageUpload(e, index)}
                              className="form-control-file mb-2"
                            />
                          </>
                        ) : (
                          <>
                            <h5 className="card-title text-dark font-weight-bold">{project.title}</h5>
                            <p className="card-text text-muted">{project.description}</p>
                          </>
                        )}
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm me-2">
                          View Demo
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                          View GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {isEditing && (
                <button className="btn btn-success mt-3" onClick={handleAddProject}>
                  Add New Project
                </button>
              )}
            </div>
          </div>

          <div className="card mb-4 shadow-lg border-0 rounded-3" >
            <div className="card-body">
              <h4 className="card-title text-black">Contact Information</h4>
              <p className="card-text text-dark Active"><strong>Email:</strong> johndoe@example.com</p>
              <p className="card-text text-dark active"><strong>Phone:</strong> +123 456 789</p>
            </div>
          </div>

          {/* Add the Back to Home button here */}
          <Link to="/Home/Home" className="btn btn-outline-primary mt-4 ms-2 active">Back to Home</Link>
          <Link to="/ECAcoins/ECAcoins" className="btn btn-outline-primary mt-4 ms-2 active">ECA coins</Link>
        
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
