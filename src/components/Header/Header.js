import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/pictures/flags/sh.svg";
import { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <h1 className="main-title"> Capital Quiz</h1>
      <nav className={`navigation-header ${isActive ? "active" : ""}`}>
        <ul className={`navigation-header__nav-menu ${isActive ? "show" : ""}`}>
          <li className="navigation-header__item">
            <Link to="/" className="anchor" href="/">
              Home
            </Link>
          </li>
          <li className="navigation-header__item">
            <a className="anchor" href="#sphera">
              Earth
            </a>
          </li>
          <li className="navigation-header__item">
            <a className="anchor" href="#quiz">
              Quiz
            </a>
          </li>
          <li className="navigation-header__item">
            <a className="anchor" href="#footer">
              Footer
            </a>
          </li>
        </ul>
        <div
          onClick={toggleMenu}
          className={`hamburger ${isActive ? "active" : ""}`}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
