import { useState } from 'react';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import emailjs from 'emailjs-com';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="centered-text">
        <h1 className="typewriter">Hello, This Is My Portfolio</h1>
      </div>
      <div className="button-container">
        <button
          className="fade-in-delayed"
          onClick={() => navigate('/frontpage')}
        >
          Click To View
        </button>
      </div>
    </>
  );
}

function FrontPage() {
  const navigate = useNavigate();
  return (
    <>
    <div className="portfolio">
      <h1 className="typewriter"></h1>    
    </div>
    <div className="damonpic">
      <img src="src/components/assets/damon.png" style={{width: '1000px', height: 'auto'}}alt="damon Logo" />
    </div>
    <div className="banner">
        <div className="name-banner-text">DAMON R. BUN</div>
        <div className="banner-text" onClick={() => navigate('/frontpage')}>HOME</div>
        <div className="banner-text" onClick={() => navigate('/about-me')}>ABOUT ME</div>
        <div className="banner-text" onClick={() => navigate('/projects')}>PROJECTS</div>
        <div className="banner-text" onClick={() => navigate('/contact')}>CONTACT</div>
      </div>
    <div className="name-text">
      <h1 className="typewriter">Damon Bun</h1>
    </div>
    <div className= "name-subtext">
        <h1 className="typewriter-delayed">A computer science student.</h1>
    </div>

    <div className="tableofcontent">
      <h1 className="fade-in-delayed">I'M A JUNIOR AT CSU SACRAMENTO AS A <br />
      COMPUTER SCIENCE MAJOR. I'M PURSUING OPPORTUNITIES THAT WILL BUILD UPON <br />
      MY TECHNICAL SKILLS AND ALLOW ME TO LEARN WHILE BUILDING NEW RELATIONSHIPS! </h1>
    </div>

    <div className="about-me">
      <h1 className="typewriter-delayed-delayed"> HELLO WORLD!</h1>
    </div>

    <div className="logo-container">
      <div className="banner-img">
      <img src="src/components/assets/linkedinlogo.png" alt="LinkedIn Logo" />
    </div>
    <div className="banner-img">
      <img src="src/components/assets/githublogo.png" alt="GitHub Logo" />
    </div>
    <div className="banner-img">
      <img src="src/components/assets/facebooklogo.png" alt="Facebook Logo" />
    </div>
    </div>
    </>
  );
}

function Projects(){
  const navigate = useNavigate();

  return(
    <>
    <div className="banner">
        <div className="name-banner-text">DAMON R. BUN</div>
        <div className="banner-text" onClick={() => navigate('/frontpage')}>HOME</div>
        <div className="banner-text" onClick={() => navigate('/about-me')}>ABOUT ME</div>
        <div className="banner-text" onClick={() => navigate('/projects')}>PROJECTS</div>
        <div className="banner-text" onClick={() => navigate('/contact')}>CONTACT</div>
      </div>
    <div className="logo-container">
      <div className="banner-img">
      <a href="https://www.linkedin.com/in/damon-bun-1252b6225/" target="_blank" rel="noopener noreferrer">
      <img src="src/components/assets/linkedinlogo.png" alt="LinkedIn Logo" />
      </a>
    </div>
    <div className="banner-img">
      <a href="https://github.com/BNDamon" target="_blank" rel="noopener noreferrer">
      <img src="src/components/assets/githublogo.png" alt="GitHub Logo" />
      </a>
    </div>
    <div className="banner-img">
      <img src="src/components/assets/facebooklogo.png" alt="Facebook Logo" />
    </div>
    </div>

    <div className="projects-page">
        <div className="project">
          <img src="src/components/assets/spacegame.png" alt="Project 1" className="project-image" />
          <div className="project-description">
            <h2>Space Game</h2>
            <p>A space adventure game where the player travels around the different cosmos and battle galatic space enemies.</p>
            <p>Skills: C++, Unity, Blender, VS Code, Audacity </p>
            <p>Entered into an itch.io game jam with over 10,000 participants</p>
            <p>Check out my <a href="https://github.com/BNDamon/Space.Adventure.Game" target="_blank" rel="noopener noreferrer">project</a>!</p>
          </div>
        </div>

        <div className="project">
          <img src="src/components/assets/project2.png" alt="Project 2" className="project-image" />
          <div className="project-description">
            <h2>Portfolio Website</h2>
            <p>A modern portfolio showcasing my work and skills using javascript and web design, built with React and styled with CSS animations.</p>
          </div>
        </div>

      </div>
    </>
    
  );
}

function AboutMe(){
  const navigate = useNavigate();

  useEffect(() => {
    gsap.from(".aboutme-container", { scale: 1, duration: 1.5, ease: "power2.inOut"});
  }, []);

  return(
    <>
    <div className="banner">
        <div className="name-banner-text">DAMON R. BUN</div>
        <div className="banner-text" onClick={() => navigate('/frontpage')}>HOME</div>
        <div className="banner-text" onClick={() => navigate('/about-me')}>ABOUT ME</div>
        <div className="banner-text" onClick={() => navigate('/projects')}>PROJECTS</div>
        <div className="banner-text" onClick={() => navigate('/contact')}>CONTACT</div>
    </div>
    <div className="logo-container">
      <div className="banner-img">
      <img src="src/components/assets/linkedinlogo.png" alt="LinkedIn Logo" />
    </div>
    <div className="banner-img">
      <img src="src/components/assets/githublogo.png" alt="GitHub Logo" />
    </div>
    <div className="banner-img">
      <img src="src/components/assets/facebooklogo.png" alt="Facebook Logo" />
    </div>
    </div>

    <div className="aboutme-picture">
    <img src="src/components/assets/me.jpg" style={{width: '500px', height: 'auto'}}alt="me pic" />
    </div>

    <div className="aboutme-bio">
    <h1 className="typewriter">ABOUT ME!</h1>
    </div>

    <div className="aboutme-descr">
    <h1 className="typewriter">
    My name is Damon Bun. I have six siblings so <br></br>finding time outside of school is difficult, but when<br></br> I do, I enjoy learning new hobbies and skills. I've <br></br>been particularly interested in cooking and <br></br>baking as I feel like its a refreshing means of <br></br>assimilating
    into my culture. I've always been an avid <br></br>reader and my favorite genres include fantasy, <br></br>mystery, and history. Lastly, of course, I like<br></br> talking and hanging out with friends!
    </h1>
    </div>
      
    

    </>
    
  );
}

function Contacts() {
  const navigate = useNavigate();
  const form = useRef(); // Reference to the form element

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    emailjs
      .sendForm(
        "service_1kkm3fs", // Replace with your EmailJS service ID
        "template_5ly4s0c", // Replace with your EmailJS template ID
        form.current, // Form reference
        "iNUPWBmsiwBn8rcj_" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <>
      <div className="contactme-text">CONTACT ME</div>
      <div className="banner">
        <div className="name-banner-text">DAMON R. BUN</div>
        <div className="banner-text" onClick={() => navigate("/frontpage")}>HOME</div>
        <div className="banner-text" onClick={() => navigate("/about-me")}>ABOUT ME</div>
        <div className="banner-text" onClick={() => navigate("/projects")}>PROJECTS</div>
        <div className="banner-text" onClick={() => navigate("/contact")}>CONTACT</div>
      </div>

      <div className="logo-container">
        <div className="banner-img">
          <img src="src/components/assets/linkedinlogo.png" alt="LinkedIn Logo" />
        </div>
        <div className="banner-img">
          <img src="src/components/assets/githublogo.png" alt="GitHub Logo" />
        </div>
        <div className="banner-img">
          <img src="src/components/assets/facebooklogo.png" alt="Facebook Logo" />
        </div>
      </div>

      <div className="contact-form-container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write your message" required></textarea>
          </div>

          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/frontpage" element={<FrontPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contacts/>}/>
      </Routes>
    </Router>
  );
}

export default App;
