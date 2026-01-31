import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
      <main className="home">
          {/* home */}
          <section className="home">
              <h1>Hi, I’m Ken!</h1>
              <h2>Software Engineer</h2>

              <p className="home-subtitle">
                  I build scalable, user-focused software and enjoy solving
                  complex problems through clean, thoughtful design.
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
                  <h3>Tech</h3>
                  <p>Java · Spring Boot · React · GCP</p>
              </div>

              <div className="cred-item">
                  <h3>Focus</h3>
                  <p>APIs · Scalable Systems · UX-minded Engineering</p>
              </div>

              <div className="cred-item">
                  <h3>Beyond Code</h3>
                  <p>Travel · Golf · Lifelong Learning</p>
              </div>
          </section>
          {/* FEATURED SECTIONS */}
          <section className="featured">
              <Link to="/experience" className="feature-card">
                  <h3>Experience</h3>
                  <p>Professional work, impact, and technologies I’ve used.</p>
              </Link>

              <Link to="/about" className="feature-card">
                  <h3>About Me</h3>
                  <p>How I think, what I value, and what drives me.</p>
              </Link>

              <Link to="/trips" className="feature-card">
                  <h3>Trips</h3>
                  <p>Travel stories and experiences that shaped my perspective.</p>
              </Link>
          </section>
      </main>
  )
}

export default Home;