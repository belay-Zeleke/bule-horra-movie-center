
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Horra Movie Center</h2>
          <p>Watch trailers. Discover movies.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#header">Home</a>
          <a href="#grid">Categories</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com/your-page">Facebook</a>
<a href="https://instagram.com/your-page">Instagram</a>
<a href="https://twitter.com/your-page">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Horra Movie Center. All rights reserved.</p>
      </div>
    </footer>
  );
}
















