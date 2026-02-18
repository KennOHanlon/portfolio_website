import React from 'react';
import {Link} from "react-router-dom";
import "./home.css"

const Home = () => {
  return (
      <main className="home-container">
          {/* home */}
          <section className="home-hero">
              <h1>Ken O'Hanlon</h1>
              {/*<h2>Software Engineer</h2>*/}
              <h2>Building Scalable Systems That Feel Simple.</h2>
              <p className="home-hero-subtext">
                  <span className="hero-role">Software Engineer</span> - Java · Spring Boot · React · GCP · Kubernetes
              </p>
              <p className="home-subtitle">
                  I translate complex business requirements into well-architected
                  technical systems that are scalable, reliable, and built for long-term
                  maintainability.
              </p>

              <p className="home-subtitle">
                  "So, hey, check me out, yeah, I'm just Ken." 🎵
              </p>
              <div className="home-actions">
                  <Link to="/experience" className="primary-btn">
                      View Experience
                  </Link>
                  <Link to="/contact-me" className="secondary-btn">
                      Get in Touch
                  </Link>
              </div>
          </section>
          {/* CREDIBILITY */}
          <section className="credibility">
              <div className="cred-item">
                  <h3>5+ Years Experience</h3>
                  <p>Designing and delivering scalable backend systems.</p>
              </div>

              <div className="cred-item">
                  <h3>Production-Scale APIs</h3>
                  <p>Built and maintained high-availability Spring Boot services.</p>
              </div>

              <div className="cred-item">
                  <h3>Cloud-Native</h3>
                  <p>Deployed and monitored applications in GCP and Kubernetes environments.</p>
              </div>
          </section>

          {/* FEATURED SECTIONS */}
          <section className="featured">
              <Link to="/about" className="feature-card">
                  <h3>About Me</h3>
                  <p>How I think, what I value, and what drives me. Dive deeper into the Kenergy.</p>
              </Link>

              <Link to="/experience" className="feature-card">
                  <h3>Experience</h3>
                  <p>Professional work, impact, and technologies I’ve used.</p>
              </Link>

              <Link to="/projects" className="feature-card">
                  <h3>Projects</h3>
                  <p>Coming soon! Section highlighting systems I've built.</p>
              </Link>
          </section>
      </main>
  )
}

export default Home;