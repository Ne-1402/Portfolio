// Footer.jsx
// Simple footer with name, social links, and copyright

import { personalInfo, socialLinks } from "../../data/portfolioData";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Left: name + credit */}
        <div className="footer__left">
          <span className="footer__name">{personalInfo.name}</span>
          <span className="footer__built">
            Built with <span className="footer__react">React</span>
          </span>
        </div>

        {/* Right: social links */}
        <div className="footer__links">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom copyright */}
      <p className="footer__copy">
        © {year} {personalInfo.name}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
