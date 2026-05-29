// EducationCard.jsx
// Reusable card for a single education entry
// Props: institution, degree, year, score, status, location

import "./Education.css";

function EducationCard({ institution, degree, year, score, status, location }) {
  return (
    <div className="edu-card card">
      {/* Status badge */}
      <span className="edu-card__badge">{status}</span>

      {/* Institution */}
      <h3 className="edu-card__institution">{institution}</h3>

      {/* Degree */}
      <p className="edu-card__degree">{degree}</p>

      {/* Meta row: year + location */}
      <div className="edu-card__meta">
        <span className="edu-card__year">
          {/* Calendar icon */}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8"  y1="2" x2="8"  y2="6"/>
            <line x1="3"  y1="10" x2="21" y2="10"/>
          </svg>
          {year}
        </span>
        {location && (
          <span className="edu-card__location">
            {/* Location pin icon */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            {location}
          </span>
        )}
      </div>

      {/* Score */}
      <div className="edu-card__score">
        <span className="edu-card__score-label">Score</span>
        <span className="edu-card__score-value">{score}</span>
      </div>
    </div>
  );
}

export default EducationCard;
