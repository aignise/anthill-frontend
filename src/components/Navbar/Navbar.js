import React from "react";
import logo from "../../images/puzzle-icon.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar bg-body-tertiary">
      <div className="container nav--container">
          <a class="navbar-brand" href="#">
          <img
            src={logo}
            className="puzzle-icon"
            alt="Logo"
            loading="eager"
            width="30"
            height="24"
          />
          </a>

          <div className="btn-prytemplate1-2">
             <div className="btn-prytemplate1-2-child" />
             <button className="sign-in" type="submit">Log Out</button>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
