// Navbar.jsx
// Uses React Router's <Link> to navigate between pages (no page reload)

import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import "./Navbar.css";

// Nav items — label shown, path is the URL route
const navItems = [
  { label: "About",      path: "/about" },
  { label: "Skills",     path: "/skills" },
  { label: "Experience", path: "/experience" },
  { label: "Projects",   path: "/projects" },
];

function Navbar() {
  // useLocation gives us the current URL so we can highlight the active link
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const toggleLabel = theme === "dark" ? "Light theme" : "Dark theme";

  return (
    <nav className="navbar">
      {/* Brand — clicking goes back to home */}
      <Link to="/" className="navbar-brand">Rishi Thakker</Link>

      <ul className="navbar-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.label}
            </Link>
          </li>
        ))}

        {/* Contact styled as a quiet button */}
        <li>
          <Link
            to="/contact"
            className={`nav-cta ${location.pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
        </li>

        <li>
          <button className="theme-toggle" type="button" onClick={toggleTheme}>
            {toggleLabel}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
