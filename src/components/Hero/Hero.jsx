// Hero.jsx
// Landing section: initials avatar, name, tagline, intro, CTA buttons
// No props needed — reads directly from portfolioData

import { personalInfo } from "../../data/portfolioData";
import "./Hero.css";

function Hero() {
  // Smooth scroll helper
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      {/* Initials Avatar — glowing circle since no photo */}
      <div className="hero__avatar-wrap">
        <div className="hero__avatar">
          <span>{personalInfo.initials}</span>
        </div>
        {/* Decorative glow ring */}
        <div className="hero__avatar-ring" />
      </div>

      {/* Name */}
      <h1 className="hero__name">
        {personalInfo.name.split(" ").map((word, i) => (
          <span key={i} className={i === 1 ? "hero__name--accent" : ""}>
            {word}{" "}
          </span>
        ))}
      </h1>

      {/* Tagline — styled like a code comment */}
      <p className="hero__tagline">
        <span className="hero__tagline-prefix">// </span>
        {personalInfo.tagline}
      </p>

      {/* Short intro */}
      <p className="hero__intro">{personalInfo.intro}</p>

      {/* CTA Buttons */}
      <div className="hero__actions">
        <button
          className="btn btn--primary"
          onClick={() => scrollTo("projects")}
        >
          View Projects
        </button>
        <button
          className="btn btn--outline"
          onClick={() => scrollTo("contact")}
        >
          Contact Me
        </button>
      </div>

      {/* Decorative background grid lines */}
      <div className="hero__bg-grid" aria-hidden="true" />
    </section>
  );
}

export default Hero;
