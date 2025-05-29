import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar fixed-top">
      <div className="navbar-content">
        <div className="company-name">
          <img
            src="assets\companyimg-removebg-preview.png"
            alt="Company Logo"
          />
        </div>

        <div className="navbar-right">
          <div className="login-buttons">
            <button className="login-btn" id="btn1">
              <i
                className="fa-solid fa-circle-user"
                style={{ color: "orange" }}
              ></i>
              Jobseeker Login
            </button>
            <button className="login-btn" id="btn2">
              Employers login
            </button>
          </div>

          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="">JOBS</a>
        </li>
        <li>
          <a href="">COMMUNITY</a>
        </li>
        <li>
          <a href="">COMPANIES</a>
        </li>
        <li>
          <a href="">PRICING</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
