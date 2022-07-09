import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

function Header() {
  console.log(logo);
  return (
    <nav className="header">
      <div className="nav-wrapper">
        <Link to="/main" className="brand-logo">
          <img src={logo} id="logo"></img>
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
