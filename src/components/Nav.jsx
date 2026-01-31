import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            {/* LEFT: Logo */}
            <div className="nav-left">
                <Link to="/" className="logo-wrapper">
                    <img
                        src="/assets/fresh-tech-ko.png"
                        alt="Kenneth O'Hanlon logo"
                        className="logo-img"
                    />
                </Link>
            </div>

            {/* RIGHT: Social Links */}
            <div className="nav-right">
                <a
                    href="https://www.linkedin.com/in/kenneth-o-hanlon-a76364a1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-icon"
                >
                    <img
                        src="/assets/linkedin-icn.png"
                        alt="LinkedIn profile"
                    />
                </a>

                <a
                    href="https://github.com/KennOHanlon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-icon"
                >
                    <img
                        src="/assets/github-icn.png"
                        alt="GitHub profile"
                    />
                </a>
            </div>
        </nav>
    );
};

export default Nav;
