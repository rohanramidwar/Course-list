import React from "react";

function Header() {
  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary justify-content-between">
      <h1 className="navbar-brand">CourseWave</h1>
      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link" href="/login" >More Courses </a></li>
        <li className="nav-item"><a className="nav-link" href="/login" >Login </a></li>
      </ul>
    </header>
  );
}

export default Header;