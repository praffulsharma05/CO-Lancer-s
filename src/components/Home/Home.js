// Import necessary modules
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      
      <section className="hero-section">
      {/* Left Side - Text Content */}
      <div className="text-content">
        <p className="enterprise-suite">Enterprise Suite</p>
        <h1 className="hero-title">
          Co-Lancer... <br />
          <span className="highlight">How </span> Co-Lancer Work? <br />
          <span className="highlight"></span>
        </h1>
        <h4 >
          a integrated website that helps collages to start gaining work
          experience within the collage.
        </h4>
      
        <button className="learn-more-btn">Learn more</button>
      </div>

      {/* Right Side - Image */}
      <div className="image-container">
        <img src="https://media.istockphoto.com/id/932763106/photo/cheerful-young-brunet-freelancer-is-smiling-typing-on-his-laptop-in-nice-modern-work-station.jpg?s=612x612&w=0&k=20&c=vsiKYyHnoYiqTNt3r04oqcfMFFrL_OZivyzNC5Y_FLI=" alt="Man in wheelchair working on laptop" className="hero-image" />
      </div>
    </section>

       
    
      {/* Featured Services Section */}
      <section id="services" className="services" >
        <div className="container">
          <h2 >Top Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src="https://media.istockphoto.com/id/1319188679/photo/rearview-shot-of-a-designer-working-on-his-computer.jpg?s=1024x1024&w=is&k=20&c=HNKY0km9ekiYICkc-HslY8xeODC6ACFLU3qEi10ReMM=" alt="Web Development" className="service-image" />
              <h3>Web Development</h3>
              <p>Create cutting-edge websites and web apps.</p>
              
            </div>
            <div className="service-card">
              <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VUklMkZVWCUyMGRlc2lnbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="Graphic Design" className="service-image" />
              <h3>Graphic Design</h3>
              <p>Beautiful and functional desig  ns for your brand.</p>
              
            </div>
            <div className="service-card">
              <img src="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Digital Marketing" className="service-image" />
              <h3>Digital Marketing</h3>
              <p>Reach the right audience with precision marketing.</p>
            </div>
            <div className="service-card">
              <img src="https://media.istockphoto.com/id/1157430259/photo/creating-effective-content-on-sticky-notes-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=abmA2J_EbqPPryGgxRAvZClLpPgxIIopR8gzmlQu2hM=" alt="Content Writing" className="service-image" />
              <h3>Content Writing</h3>
              <p>Engaging content that drives traffic.</p>
            </div>
           
          </div>
        </div>
      </section>
 

      <div className="hero-section">
      <div className="text-content">
        <h1 className="hero-tittle">Find talent your way</h1>
        <p>Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.</p>
        <ul className="features">
          <li>✅ Setup your profile and show some prjects. </li>
          <li>✅ Earn ECA coins and convert into credit points.</li>
          <li>✅ Signup and earn first 200/- ECA coins.</li>
          <li>✅ Find Projects and sent sent proposals. </li>
        </ul>
      </div>
      <div className="hero-image">
        <img src="https://media.istockphoto.com/id/1129342452/photo/portrait-of-cheerful-young-manager-handshake-with-new-employee.jpg?s=612x612&w=0&k=20&c=fhrfMXr8-10DjuLocKLiny-1FgPumyjjzDYsG7epVi4=" alt="Hero Image" />
      </div>

      
     
    </div>

    <section className="hero-section">
      {/* Left Side - Text Content */}
      <div className="text-content">
        
        <h1 className="hero-title">
            <br />
          <span className="highlight">Co-</span>Lancer's <br />
          What is<span className="highlight">ECA coins ?</span>
        </h1>
       
        <ul className="features">
          <li>✅ Works on projects or freelance tasks for local clients.</li>
          <li>✅ Earn EC coins as reward for your efforts.</li>
          <li>✅ Convert ECA coins into college credit points for finals.</li>
        </ul>
        <button className="learn-more-btn">Learn more</button>
      </div>

      {/* Right Side - Image */}
      <div className="image-container">
        <img src="https://media.istockphoto.com/id/1346143621/photo/positive-young-mixed-race-woman-using-a-laptop-and-smartphone-at-home-cozy-home-interior-with.jpg?s=612x612&w=0&k=20&c=o92yS8xrYMIgAOwq6VpVU713mS2wpLa5-1bBRgysHU4=" alt="Man in wheelchair working on laptop" className="hero-image" />
      </div>
    </section>
    </div>

  );
};

export default Home;


 


