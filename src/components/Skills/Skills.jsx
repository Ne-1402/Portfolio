// Skills.jsx
// Shows skills grouped by category: Languages, Frameworks, Technical Interests
// Uses SkillTag component for each item

import { skills } from "../../data/portfolioData";
import SkillTag from "./SkillTag";
import "./Skills.css";

// Each group: label shown to user, data array, category string for styling
const skillGroups = [
  { title: "Languages",            data: skills.languages,  category: "language"   },
  { title: "Frameworks",           data: skills.frameworks, category: "framework"  },
  { title: "Technical Interests",  data: skills.interests,  category: "interest"   },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <p className="section-label">03. skills</p>
      <h2 className="section-title">
        Technical <span>Arsenal</span>
      </h2>
      <div className="section-divider" />

      <div className="skills__groups">
        {skillGroups.map((group) => (
          // Only render group if it has items
          group.data.length > 0 && (
            <div key={group.title} className="skills__group card">
              {/* Group header */}
              <h3 className="skills__group-title">
                <span className="skills__group-prefix">{"// "}</span>
                {group.title}
              </h3>

              {/* Tags */}
              <div className="skills__tags">
                {group.data.map((skill, i) => (
                  <SkillTag key={i} label={skill} category={group.category} />
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      {/* Note about tools */}
      {skills.tools.length === 0 && (
        <p className="skills__note">
          <span>{"// "}</span>
          Tools section will be updated as the stack grows.
        </p>
      )}
    </section>
  );
}

export default Skills;
