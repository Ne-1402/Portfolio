// ScrollToTop.jsx
// A floating button that appears after scrolling down 300px
// Clicking it smoothly scrolls back to the top

import { useState, useEffect } from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
  // Controls whether the button is visible
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Don't render at all if not visible
  if (!visible) return null;

  return (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="18,15 12,9 6,15"/>
      </svg>
    </button>
  );
}

export default ScrollToTop;
