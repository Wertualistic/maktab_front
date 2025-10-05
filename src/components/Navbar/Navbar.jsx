import React from "react";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="gg" />
      </div>
      <div className="navItems">
        <ul>
          <li>Bosh sahifa</li>
          <li>Biz haqimizda</li>
          <li>Aloqaga chiqing</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
