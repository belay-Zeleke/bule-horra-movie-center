
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo and description */}
        <div className="footer-logo">
          <h2>Horra Movie Center</h2>
          <p>Watch trailers. Discover movies.</p>
        </div>

        {/* Quick links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#header">Home</a>
          <a href="#grid">Categories</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social links */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.x.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Horra Movie Center.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
