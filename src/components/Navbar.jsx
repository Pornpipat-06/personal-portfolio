import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // เราจะสร้างไฟล์ CSS นี้ทีหลัง

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">MyPortfolio</NavLink>
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/education" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Education</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/experience" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Experience</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;