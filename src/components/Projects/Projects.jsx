// Projects.jsx
// Shows project cards — or an empty state when no projects are available yet.
// To add projects: update the `projects` array in portfolioData.js

import { projects } from "../../data/portfolioData";
import "./Projects.css";

// ProjectCard — inline since logic is simple
function ProjectCard({ name, description, techStack, githubUrl, liveUrl }) {
  return (
    <div className="project-card card">
      {/* Header row */}
      <div className="project-card__header">
        <div className="project-card__icon">
          {/* Folder icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        {/* External links */}
        <div className="project-card__links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" title="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
              </svg>
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" title="Live Demo">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15,3 21,3 21,9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Name + description */}
      <h3 className="project-card__name">{name}</h3>
      <p className="project-card__desc">{description}</p>

      {/* Tech stack tags */}
      {techStack && (
        <div className="project-card__stack">
          {techStack.map((tech, i) => (
            <span key={i} className="project-card__tech">{tech}</span>
          ))}
        </div>
      )}
    </div>
  );
}

// ---- Empty State ----
function EmptyProjects() {
  return (
    <div className="projects__empty">
      <div className="projects__empty-icon">
        {/* Construction icon */}
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          <line x1="12" y1="11" x2="12" y2="17"/>
          <line x1="9"  y1="14" x2="15" y2="14"/>
        </svg>
      </div>
      <h3 className="projects__empty-title">Projects Loading…</h3>
      <p className="projects__empty-text">
        Currently in first year — real projects are being built.<br />
        Check back soon or visit{" "}
        <a
          href="https://github.com/Ne-1402"
          target="_blank"
          rel="noreferrer"
          className="projects__empty-link"
        >
          GitHub
        </a>{" "}
        for the latest activity.
      </p>
      <p className="projects__empty-note">
        <span>{"// "}</span>add projects to <code>portfolioData.js</code> to populate this section
      </p>
    </div>
  );
}

// ---- Main Component ----
function Projects() {
  return (
    <section id="projects" className="projects">
      <p className="section-label">04. projects</p>
      <h2 className="section-title">
        What I've <span>Built</span>
      </h2>
      <div className="section-divider" />

      {/* If projects exist → render cards, otherwise → empty state */}
      {projects.length > 0 ? (
        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              name={project.name}
              description={project.description}
              techStack={project.techStack}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      ) : (
        <EmptyProjects />
      )}
    </section>
  );
}

export default Projects;
