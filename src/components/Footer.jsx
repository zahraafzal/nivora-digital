import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <img
            src="/nivora-logo.png"
            alt="Nivora Digital Logo"
            className="footer-logo"
          />
          <p>One partner for e-commerce, trade and logistics solutions.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Contact */}
        <div>
          <h4>Contact</h4>
          <a href="mailto:nivoradigital1029@gmail.com">
            <Mail size={16} /> nivoradigital1029@gmail.com
          </a>
          <a href="tel:+923288699236">
            <Phone size={16} /> +92 328 8699236
          </a>
          <a href="https://wa.me/923288699236" target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Nivora Digital. All rights reserved.</p>
        <a href="#top">Back To Top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
