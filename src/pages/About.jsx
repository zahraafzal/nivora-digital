import { Link } from "react-router-dom";
import { ArrowUpRight, Target, Lightbulb, Gem, Check } from "lucide-react";

const values = [
  {
    icon: <Target />,
    title: "Our Mission",
    text: "To deliver creative and practical solutions that help businesses grow.",
  },
  {
    icon: <Lightbulb />,
    title: "Our Vision",
    text: "To help businesses embrace new opportunities, locally and globally.",
  },
  {
    icon: <Gem />,
    title: "Our Approach",
    text: "Quality, honesty and attention to detail in every project.",
  },
];

const whatWeDo = [
  "E-Commerce Solutions",
  "Import Services",
  "Export Services",
  "Logistics & Shipping",
  "Buyer & Sourcing Support",
  "Web Development",
];

function About() {
  return (
    <main>
      <section className="page-banner">
        <span className="section-label">ABOUT NIVORA DIGITAL</span>
        <h1>
          Ideas That Inspire. <span>Solutions That Deliver.</span>
        </h1>
        <p>
          A service agency helping businesses sell online, source products and
          ship goods, all with one dedicated team.
        </p>
      </section>

      <section className="ab-who">
        <div className="ab-who-image">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
            alt="Nivora Digital team discussing a project"
          />
        </div>

        <div className="ab-who-text">
          <span className="section-label">WHO WE ARE</span>
          <h2>One Partner For Your Business Needs</h2>
          <p>
            At Nivora Digital, we believe every business deserves a strong
            presence and reliable support. Instead of dealing with many
            different companies, our clients work with one team for online
            selling, trade and logistics.
          </p>

          <div className="ab-list">
            {whatWeDo.map((item) => (
              <span key={item}>
                <Check size={18} /> {item}
              </span>
            ))}
          </div>

          <Link to="/services" className="gold-btn">
            View Our Services <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="ab-values">
        <div className="section-heading">
          <span className="section-label">WHAT DRIVES US</span>
          <h2>
            Our <span>Values</span>
          </h2>
        </div>

        <div className="why-grid">
          {values.map((value) => (
            <div className="why-card" key={value.title}>
              <div className="why-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-cta">
        <span className="section-label">LET'S WORK TOGETHER</span>
        <h2>
          Have An Idea <span>In Mind?</span>
        </h2>
        <p>Let's explore what we can do for your business.</p>
        <div className="hero-actions center">
          <Link to="/contact" className="gold-btn">
            Get In Touch <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
