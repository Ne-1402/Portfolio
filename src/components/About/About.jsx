// About.jsx
// Bio, career objective, and hobbies section
// No props — reads from portfolioData directly

import { about, personalInfo } from "../../data/portfolioData";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      {/* Section header */}
      <p className="section-label">01. about</p>
      <h2 className="section-title">
        Who I <span>Am</span>
      </h2>
      <div className="section-divider" />

      {/* Two-column grid: bio left, sidebar right */}
      <div className="about__grid">

        {/* Left: Bio + Objective */}
        <div className="about__main">
          <p className="about__bio">{about.bio}</p>

          <div className="about__objective-box">
            <p className="about__objective-label">
              <span>{"// "}</span>career objective
            </p>
            <p className="about__objective">{about.objective}</p>
          </div>
        </div>

        {/* Right: Quick info + Hobbies */}
        <div className="about__sidebar">
          {/* Quick facts */}
          <div className="about__facts card">
            <h3 className="about__facts-title">Quick Info</h3>
            <ul className="about__facts-list">
              <li>
                <span className="fact-key">Name</span>
                <span className="fact-val">{personalInfo.name}</span>
              </li>
              <li>
                <span className="fact-key">Year</span>
                <span className="fact-val">1st Year, 2025–29</span>
              </li>
              <li>
                <span className="fact-key">Focus</span>
                <span className="fact-val">Systems / Low-Level</span>
              </li>
              <li>
                <span className="fact-key">Email</span>
                <span className="fact-val">
                  <a href={`mailto:${personalInfo.email}`} className="about__email-link">
                    {personalInfo.email}
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Hobbies */}
          <div className="about__hobbies">
            <h3 className="about__hobbies-title">Interests & Hobbies</h3>
            <div className="about__hobby-tags">
              {about.hobbies.map((hobby, i) => (
                <span key={i} className="hobby-tag">{hobby}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;