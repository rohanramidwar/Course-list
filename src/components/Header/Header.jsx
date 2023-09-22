import React from "react";
import "./styles.css";

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between header">
      <h1 className="navbar-brand">coursewave</h1>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/login">
            More Courses{" "}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">
            Login{" "}
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
