import { Link } from "react-router-dom";
import services from "../data/services";
import {
  ArrowUpRight,
  MessageCircle,
  Check,
  ChevronDown,
  ShieldCheck,
  Clock,
  Users,
  Globe,
  Award,
} from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80";

const heroPoints = ["Trusted Sourcing", "Fast Shipping", "End-to-End Support"];

const reasons = [
  {
    icon: <ShieldCheck />,
    title: "Reliable Support",
    text: "Clear communication and honest guidance at every step.",
  },
  {
    icon: <Clock />,
    title: "Timely Delivery",
    text: "We plan carefully so your work stays on schedule.",
  },
  {
    icon: <Users />,
    title: "One Dedicated Team",
    text: "One partner for sourcing, shipping and online selling.",
  },
  {
    icon: <Globe />,
    title: "Local & Global Reach",
    text: "Support for businesses selling at home and abroad.",
  },
];

const steps = [
  {
    number: "01",
    title: "Consultation",
    text: "We understand your business and your goals.",
  },
  {
    number: "02",
    title: "Planning",
    text: "We prepare a clear plan for your requirement.",
  },
  {
    number: "03",
    title: "Execution",
    text: "Our team handles the work from start to finish.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    text: "We stay with you after delivery.",
  },
];

const registrations = [];

function Home() {
  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        {/* Left side - text */}
        <div className="hero-content">
          <span className="eyebrow">
            E-COMMERCE · IMPORT & EXPORT · LOGISTICS
          </span>

          <h1>
            Grow Your Business.
            <span>Locally & Globally.</span>
          </h1>

          <p>
            Sourcing, shipping and online selling, handled by one dedicated
            team.
          </p>

          <div className="hero-actions">
            <Link to="/services" className="gold-btn">
              Explore Our Services <ArrowUpRight size={18} />
            </Link>

            <a
              href="https://wa.me/923288699236"
              target="_blank"
              rel="noreferrer"
              className="outline-btn"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>

          <div className="hero-points">
            {heroPoints.map((point) => (
              <span key={point}>
                <Check size={16} /> {point}
              </span>
            ))}
          </div>
        </div>

        {/* Right side - photo */}
        <div className="hero-image-box">
          <div className="hero-frame"></div>
          <img
            src={heroImage}
            alt="Warehouse with packed boxes ready for shipping"
          />
          <div className="hero-badge">
            <strong>One Partner.</strong>
            <span>Multiple Solutions.</span>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="scroll-cue">
          SCROLL TO DISCOVER <ChevronDown size={16} />
        </div>
      </section>

      {/* ===== TRUST STRIP (hero ke neeche patti) ===== */}
      <section className="trust-strip">
        {services.slice(0, 4).map((service) => (
          <div key={service.number}>
            <Check size={18} /> {service.title}
          </div>
        ))}
      </section>

      {/* ===== AGENCY INTRODUCTION ===== */}
      <section className="intro-section">
        <span className="section-label">WELCOME TO NIVORA DIGITAL</span>
        <h2>
          One Partner For Your <span>Business Growth</span>
        </h2>
        <p>
          Nivora Digital helps businesses sell online, source products, and ship
          goods locally and internationally, all with one dedicated team.
        </p>
      </section>

      {/* ===== ABOUT US ===== */}
      <section className="home-about">
        <div className="home-about-text">
          <span className="section-label">ABOUT US</span>
          <h2>Built To Support Growing Businesses</h2>
          <p>
            At Nivora Digital, we believe every business deserves a strong
            presence and reliable support. We combine e-commerce, trade and
            logistics services so you can focus on growing.
          </p>
          <Link to="/about" className="gold-btn">
            Read More About Us <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="home-about-image">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
            alt="Team working together in an office"
          />
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="home-services">
        <div className="section-heading">
          <span className="section-label">WHAT WE OFFER</span>
          <h2>
            Our <span>Services</span>
          </h2>
        </div>

        <div className="home-services-grid">
          {services.map((service) => (
            <div className="home-service-card" key={service.number}>
              <img src={service.image} alt={service.title} />
              <span className="card-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link to={`/services/${service.slug}`}>
                Explore Service <ArrowUpRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BANNER ===== */}
      <section className="home-banner">
        <h2>One Partner. Multiple Business Solutions.</h2>
        <Link to="/contact" className="dark-btn">
          Contact Us <ArrowUpRight size={18} />
        </Link>
      </section>

      {/* ===== REGISTRATIONS & AFFILIATIONS ===== */}
      <section className="registrations">
        <div className="section-heading">
          <span className="section-label">TRUST & COMPLIANCE</span>
          <h2>
            Registrations & <span>Affiliations</span>
          </h2>
        </div>

        {registrations.length === 0 ? (
          <p className="coming-soon">Details coming soon.</p>
        ) : (
          <div className="registrations-grid">
            {registrations.map((item) => (
              <div className="registration-card" key={item.name}>
                <Award />
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="why-us">
        <div className="section-heading">
          <span className="section-label">WHY NIVORA DIGITAL</span>
          <h2>
            Why <span>Choose Us</span>
          </h2>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <div className="why-card" key={reason.title}>
              <div className="why-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== OUR PROCESS ===== */}
      <section className="process">
        <div className="section-heading">
          <span className="section-label">HOW WE WORK</span>
          <h2>
            Our <span>Process</span>
          </h2>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div className="process-step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="contact-cta">
        <span className="section-label">LET'S WORK TOGETHER</span>
        <h2>
          Ready To Grow Your <span>Business?</span>
        </h2>
        <p>Talk to our team today. We usually reply on WhatsApp.</p>
        <div className="hero-actions center">
          <Link to="/contact" className="gold-btn">
            Get In Touch <ArrowUpRight size={18} />
          </Link>
          <a
            href="https://wa.me/923288699236"
            target="_blank"
            rel="noreferrer"
            className="outline-btn"
          >
            <MessageCircle size={18} /> WhatsApp Us
          </a>
        </div>
      </section>
      {/* ===== WHATSAPP FLOATING BUTTON ===== */}
      <a
        href="https://wa.me/923288699236"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </main>
  );
}

export default Home;
