import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import services from "../data/services";

function Services() {
  return (
    <main>
      <section className="page-banner">
        <span className="section-label">WHAT WE OFFER</span>
        <h1>
          Our Services. <span>Built For Your Growth.</span>
        </h1>
        <p>
          From online selling to importing, exporting and shipping, explore the
          services our team provides.
        </p>
      </section>

      <section className="home-services">
        <div className="home-services-grid">
          {services.map((service) => (
            <div className="home-service-card" key={service.slug}>
              <img src={service.image} alt={service.title} />
              <span className="card-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link to={`/services/${service.slug}`}>
                View Details <ArrowUpRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="contact-cta">
        <span className="section-label">NOT SURE WHAT YOU NEED?</span>
        <h2>
          Let's Talk About <span>Your Business</span>
        </h2>
        <p>Tell us your requirement and our team will guide you.</p>
        <div className="hero-actions center">
          <Link to="/contact" className="gold-btn">
            Contact Us <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;
