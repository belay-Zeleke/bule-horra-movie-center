// export default function Header() {
//   return (
//     <header className="header">
//       <h1>Horra Movie Center</h1>
//       <p>Watch trailers. Discover movies.</p>
//     </header>
//   );
// }


import logo from "../assets/logo.png"; // <-- add your logo image in this path

export default function Header() {
  return (
    <header className="header" id="header">
      <div className="header-content">
        <img src={logo} alt="Horra Movie Center Logo" className="logo" />
        <div className="header-text">
          <h1> Bule Horra Movie Center</h1>
          <p>Watch trailers. Discover movies.</p>
        </div>
      </div>
    </header>
  );
}
