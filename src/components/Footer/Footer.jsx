import React from "react";
import "./styles.css"

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-3 my-4">
      <p className="text-center text-muted">Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
