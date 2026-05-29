// Contact.jsx
// Contact section with:
//   - Email link button
//   - Social links
//   - Frontend-only contact form (no backend — just UI + state)

import { useState } from "react";
import { personalInfo, socialLinks } from "../../data/portfolioData";
import "./Contact.css";

function Contact() {
  // Form state — controlled inputs
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Track if form was "submitted" (frontend only — no real send)
  const [submitted, setSubmitted] = useState(false);

  // Update individual field
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle submit — in real app you'd send to an API/email service
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="contact">
      <p className="section-label">05. contact</p>
      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>
      <div className="section-divider" />

      <div className="contact__grid">
        {/* Left: Info */}
        <div className="contact__info">
          <p className="contact__desc">
            I'm always open to conversations about systems programming,
            fintech, kernel internals, or anything low-level. Feel free to
            reach out — I'll get back as soon as I can.
          </p>

          {/* Email button */}
          <a href={`mailto:${personalInfo.email}`} className="contact__email-btn">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            {personalInfo.email}
          </a>

          {/* Social links */}
          <div className="contact__socials">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="contact__social-link"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Right: Contact form (frontend only) */}
        <div className="contact__form-wrap">
          {!submitted ? (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="What's on your mind?"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                Send Message
              </button>

              <p className="form-note">
                <span>{"// "}</span>
                This form is UI only — link it to EmailJS or Formspree for real emails.
              </p>
            </form>
          ) : (
            // Shown after submit
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Message Received</h3>
              <p>Thanks for reaching out, {form.name}! I'll get back to you soon.</p>
              <button
                className="form-submit"
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
              >
                Send Another
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
