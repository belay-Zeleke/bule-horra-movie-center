// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-logo">
//           <h2>Bule Horra Movie Center</h2>
//         </div>

//         <div className="footer-links">
//           <a href="#home">Home</a>
//           <a href="#categories">Categories</a>
//           <a href="#contact">Contact</a>
//         </div>

//         <div className="footer-social">
//           <a href="#"><span>Facebook</span></a>
//           <a href="#"><span>Twitter</span></a>
//           <a href="#"><span>Instagram</span></a>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>© {new Date().getFullYear()} Horra Movie Center. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }




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
            <a href="#" className="social-btn">FB</a>
            <a href="#" className="social-btn">TW</a>
            <a href="#" className="social-btn">IG</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Horra Movie Center. All rights reserved.</p>
      </div>
    </footer>
  );
}
