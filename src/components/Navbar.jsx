import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar" id="top">
      <Link to="/" className="logo" onClick={closeMenu}>
        <img src="/nivora-logo.png" alt="Nivora Digital Logo" />
      </Link>

      <nav className={menuOpen ? "nav-open" : ""}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About Us
        </NavLink>
        <NavLink to="/services" onClick={closeMenu}>
          Services
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Contact Us
        </NavLink>
      </nav>

      <Link to="/contact" className="nav-button">
        Let's Talk <ArrowUpRight size={17} />
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
    </header>
  );
}

export default Navbar;
