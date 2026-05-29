// Sidebar.jsx
// Fixed left sidebar — shows nav links + social icons
// Props:
//   activeSection  — which section is currently in view (string)
//   sidebarOpen    — is sidebar open on mobile (boolean)
//   setSidebarOpen — toggle function
//   onNavClick     — called when a nav link is clicked (closes sidebar on mobile)

import { personalInfo, navSections, socialLinks } from "../../data/portfolioData";
import "./Sidebar.css";

// --- Inline SVG Icons ---
// Defined here to keep things simple — no icon library needed

const icons = {
  home: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  ),
  about: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  education: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  skills: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16,18 22,12 16,6"/>
      <polyline points="8,6 2,12 8,18"/>
    </svg>
  ),
  projects: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  contact: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
};

// Map section id → icon
const sectionIcon = {
  hero:      icons.home,
  about:     icons.about,
  education: icons.education,
  skills:    icons.skills,
  projects:  icons.projects,
  contact:   icons.contact,
};

// Social link icons
const SocialIcon = ({ type }) => {
  if (type === "github") return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
    </svg>
  );
  if (type === "linkedin") return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
  if (type === "email") return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
  return null;
};

// Smooth scroll to a section by id
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

function Sidebar({ activeSection, sidebarOpen, setSidebarOpen, onNavClick }) {
  return (
    <>
      {/* Hamburger button — only visible on mobile */}
      <button
        className="hamburger"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Sidebar panel */}
      <aside className={`sidebar ${sidebarOpen ? "sidebar--open" : ""}`}>

        {/* Top: Logo / Identity */}
        <div className="sidebar__header">
          <div className="sidebar__avatar">AM</div>
          <div>
            <p className="sidebar__name">{personalInfo.name.split(" ")[0]}</p>
            <p className="sidebar__role">CS Undergrad</p>
          </div>
        </div>

        {/* Divider line */}
        <div className="sidebar__divider" />

        {/* Navigation Links */}
        <nav className="sidebar__nav">
          {navSections.map((section) => (
            <button
              key={section.id}
              className={`nav-link ${activeSection === section.id ? "nav-link--active" : ""}`}
              onClick={() => {
                scrollToSection(section.id);
                onNavClick();
              }}
            >
              <span className="nav-link__icon">
                {sectionIcon[section.id]}
              </span>
              <span className="nav-link__label">{section.label}</span>

              {/* Active indicator dot */}
              {activeSection === section.id && (
                <span className="nav-link__dot" />
              )}
            </button>
          ))}
        </nav>

        {/* Bottom: Social links */}
        <div className="sidebar__footer">
          <div className="sidebar__divider" />
          <div className="sidebar__socials">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                title={link.label}
              >
                <SocialIcon type={link.icon} />
              </a>
            ))}
          </div>
          <p className="sidebar__credit">Built with React</p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
