// SkillTag.jsx
// Reusable tag/chip for a single skill
// Props:
//   label    — the skill name (string)
//   category — "language" | "framework" | "interest"  (controls color)

import "./Skills.css";

function SkillTag({ label, category }) {
  return (
    <span className={`skill-tag skill-tag--${category}`}>
      {label}
    </span>
  );
}

export default SkillTag;
