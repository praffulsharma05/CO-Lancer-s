 

import React from "react";
import './projects.css'

const Projects = () => {
  return (
    <div >
      
      <section style={{ backgroundColor: "#4d46c8", color: "white", padding: "2rem 0" }}>
        <div className="container">
          <h2 className="text-center mb-4">Featured Projects</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <img
                  src="https://media.istockphoto.com/id/1488919446/photo/working-from-home-in-downtown-los-angeles.webp?a=1&b=1&s=612x612&w=0&k=20&c=AcGE64i6FDIXxIfQsxdY2D8Ahv5lHFy93zF6MSo7a7I="
                   className="card-img-top"
                  alt="Project 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Project 1</h5>
                  <p className="card-text">
                    A description of this amazing project. This could be a
                    new development, product, or service.
                  </p>
                  <a href="#" className="btn btn-light">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img
                  src="https://media.istockphoto.com/id/840198876/photo/concept-of-new-business-idea-and-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=3u24unr63LQ4uud2rQoScNZKUAg9gOAVXlaNWmJgExw="
                  className="card-img-top"
                  alt="Project 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Project 2</h5>
                  <p className="card-text">
                    A short description of what this project entails.
                  </p>
                  <a href="#" className="btn btn-light">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img
                  src="https://media.istockphoto.com/id/1847851437/photo/customer-with-bank-manager-in-office-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=fp6ZmqEabXtySy3qvo9g2HQGFEy9lWDUi2uxcgX4T5c="
                  className="card-img-top"
                  alt="Project 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Project 3</h5>
                  <p className="card-text">
                    A description for this third project. What makes this
                    project stand out?
                  </p>
                  <a href="#" className="btn btn-light">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section style={{ backgroundColor: "#4d46c8", color: "white", padding: "2rem 0" }}>
        <div className="container">
          <h2 className="text-center mb-4">Our Best freelancers</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661778880901-6a81030cc8f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5vbG9neSUyMHdvcmtzJTIwaW1hZ2VzJTIwc3F1cmV8ZW58MHx8MHx8fDA%3D"
                  className="card-img-top"
                  alt="Work 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Work 1</h5>
                  <p className="card-text active">
                    This project showcases our expertise in creating
                    beautiful designs.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://media.istockphoto.com/id/641323368/photo/businesswoman-with-cloud-service-network.webp?a=1&b=1&s=612x612&w=0&k=20&c=_c5z6eUzVRwglQ_bJEucy6AK-awWgZ4cpvUGOJMhV9M="
                  className="card-img-top"
                  alt="Work 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Work 2</h5>
                  <p className="card-text">
                    We work on innovative solutions that drive success for
                    our clients.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRlY2hub2xvZ3klMjB3b3JrcyUyMGltYWdlcyUyMHNxdXJlfGVufDB8fDB8fHww"
                  className="card-img-top"
                  alt="Work 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Work 3</h5>
                  <p className="card-text">
                    A powerful project that helps businesses grow and
                    flourish in the modern world.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
       
    </div>
  );
};

export default Projects;
