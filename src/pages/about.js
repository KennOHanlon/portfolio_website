import React from "react";
import { Carousel } from "../components/Carousel";
import slides from "../data/japan-carousel.json";
import bookSlides from "../data/books-carousel.json";
import "../pages/about.css";
import landingImage from "../data/japan-fuji-cropped.jpg";


const About = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const LandingCard = ({ icon, title, description, onClick }) => {
    return (
      <div className="landing-card" onClick={onClick}>
        <div className="card-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="card-hover-indicator">Explore →</div>
      </div>
    );
  };
  

  return (
    <div className="about-page">

      <section className="about-landing">
          <div
            className="landing-background"
            style={{ backgroundImage: `url(${landingImage})` }}
          />

          <div className="landing-overlay" />

          <div className="landing-content">
          <h1 className="landing-title">
            Problem Solver. <br />
            Lifelong Learner. <br />
            Builder.
          </h1>

          <p className="landing-subheadline">
            In code and in life, I build thoughtful systems, explore ideas deeply, and pursue
            growth with intention.
          </p>

          <p className="landing-description">
            Whether engineering scalable applications, studying psychology,
            finance, or culture, I’m driven by curiosity and disciplined execution.
          </p>

          <div className="landing-card-grid">
            <LandingCard
              icon="📚"
              title="Lifelong Learning"
              description="Books, systems thinking, and 1% daily improvement."
              onClick={() => scrollToSection("learning")}
            />
            <LandingCard
              icon="🌏"
              title="Cultural Exploration"
              description="Japanese language, travel, and global perspective."
              onClick={() => scrollToSection("culture")}
            />
            <LandingCard
              icon="⛳"
              title="Golf & Discipline"
              description="Work ethic, consistency, and legacy."
              onClick={() => scrollToSection("golf")}
            />
          </div>
        </div>
      </section>


      {/* ================= LIFELONG LEARNING ================= */}
      <section id="learning" className="about-section alt-bg">
        <div className="section-container split">

          {/* TEXT SIDE */}
          <div className="text-side">
            <h2>Lifelong Learning</h2>

            <blockquote>
              “Consistency compounds. Improve 1% each day, and in a year
              you’re 37x better.”
            </blockquote>

            <p>
              Growth isn’t accidental. I build habits intentionally through reading nightly,
              studying systems and refining my craft. I believe consistency builds
              success, and investing in yourself compounds over time.
            </p>

            <p>
              The books in the carousel are just a few that have shaped how I think about leadership,
              discipline, honesty, psychology, and wealth.
            </p>
          </div>

          {/* CAROUSEL SIDE */}
          <div className="media-side">
            <Carousel data={bookSlides} />
          </div>

        </div>
      </section>


      {/* ================= CULTURE / JAPAN ================= */}
      <section id="culture" className="about-section">
        <div className="section-container split">

          <div className="text-side">
            <h2>Appreciation for World Culture</h2>

            <p>
              When I was a kid, I wanted to be a ninja. That early fascination
              evolved into eight years of studying Japanese language and culture.
            </p>

            <p>
              In 2013, I placed runner-up in the Michigan High School Japanese
              Quiz Bowl. Years later, I traveled to Tokyo, Kyoto, and Hiroshima allowing
              me to experience firsthand the culture that first inspired me.
            </p>

            <p>
              Travel broadens perspective. It challenges assumptions and builds
              empathy. Japan sparked that curiosity, and I continue to explore
              the world with the same mindset.
            </p>
          </div>

          <div className="media-side">
            <Carousel data={slides} />
          </div>
        </div>
      </section>

      {/* ================= GOLF ================= */}
      <section id="golf" className="about-section alt-bg">
        <div className="section-container split">

          <div className="text-side">
            <h2>⛳ Golf & Discipline</h2>

            <p>
              I had a 5-iron in my hands at five years old. Golf shaped my
              discipline long before I understood the word.
            </p>

            <p>
              Early mornings. Long summer days. 36 holes caddying, then 18 of my
              own. That consistency built more than a swing, it built work ethic.
            </p>

            <p>
              The Chick Evans Caddie Scholarship ultimately gave me a full ride
              to the University of Michigan, a life-changing opportunity born
              from persistence and discipline.
            </p>

            <p>
              Today, golf is less about scorecards and more about time,
              especially the rounds I play with my dad.
            </p>
          </div>

          <div className="media-side">
            {/* Future interactive Michigan course map goes here */}
            <div className="placeholder-box">
              Interactive course map coming soon.
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
