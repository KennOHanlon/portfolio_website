import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";

const Projects = () => {
    return (
        <main className="projects-container">
            <section className="projects-hero">
                <h1>Projects</h1>

                <p className="projects-subtitle">
                    I build scalable systems, full-stack applications, and tools focused on
                    performance and thoughtful design.
                </p>

                <div className="coming-soon-box">
                    <h2>🚧 More Coming Soon</h2>
                    <p>
                        I’m currently preparing detailed breakdowns of projects including
                        architecture decisions, technical challenges, and measurable impact.
                    </p>
                    <p>
                        Check back soon for full case studies and code samples.
                    </p>
                </div>

                <div className="projects-actions">
                    <Link to="/experience" className="primary-btn">
                        View Experience
                    </Link>

                    <Link to="/contact" className="secondary-btn">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Projects;
