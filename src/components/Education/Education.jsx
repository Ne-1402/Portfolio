// Education.jsx
// Renders all education entries using EducationCard
// Data comes from portfolioData.js — add more entries there if needed

import { education } from "../../data/portfolioData";
import EducationCard from "./EducationCard";
import "./Education.css";

function Education() {
  return (
    <section id="education" className="education">
      <p className="section-label">02. education</p>
      <h2 className="section-title">
        Academic <span>Background</span>
      </h2>
      <div className="section-divider" />

      {/* Map over education array — add more to portfolioData.js to show more cards */}
      <div className="education__list">
        {education.map((item) => (
          <EducationCard
            key={item.id}
            institution={item.institution}
            degree={item.degree}
            year={item.year}
            score={item.score}
            status={item.status}
            location={item.location}
          />
        ))}
      </div>
    </section>
  );
}

export default Education;
