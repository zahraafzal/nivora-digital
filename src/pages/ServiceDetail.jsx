import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import services from "../data/services";

function ServiceDetail() {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <main className="page-banner">
        <h1>Service Not Found</h1>
        <p>
          <Link to="/services" className="gold-btn">
            Back To Services
          </Link>
        </p>
      </main>
    );
  }

  const whatsappText = encodeURIComponent(
    `Hi Nivora Digital, I'm interested in ${service.title}.`,
  );

  return (
    <main>
      <section className="page-banner">
        <span className="section-label">SERVICE {service.number}</span>
        <h1>{service.title}</h1>
        <p>{service.text}</p>
      </section>

      <section className="ab-who">
        <div className="ab-who-image">
          <img src={service.image} alt={service.title} />
        </div>

        <div className="ab-who-text">
          <span className="section-label">WHAT'S INCLUDED</span>
          <h2>How We Can Help</h2>

          <div className="detail-points">
            {service.points.map((point) => (
              <span key={point}>
                <Check size={18} /> {point}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <Link to="/contact" className="gold-btn">
              Request This Service <ArrowUpRight size={18} />
            </Link>
            <a
              href={`https://wa.me/923288699236?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="outline-btn"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="ab-values">
        <div className="section-heading">
          <span className="section-label">EXPLORE MORE</span>
          <h2>
            Other <span>Services</span>
          </h2>
        </div>

        <div className="other-services">
          {services
            .filter((item) => item.slug !== service.slug)
            .map((item) => (
              <Link to={`/services/${item.slug}`} key={item.slug}>
                {item.title} <ArrowUpRight size={16} />
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}

export default ServiceDetail;
