import { useState } from "react";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";
import services from "../data/services";

function Contact() {
  // Form ki values
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Zaroori fields check karo
    if (!name || !phone || !message) {
      setError("Please fill in your name, phone and message.");
      return;
    }
    setError("");

    // Form ka data WhatsApp message bana ke bhejo
    const text =
      `New Enquiry - Nivora Digital\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email || "-"}\n` +
      `Service: ${service || "-"}\n` +
      `Message: ${message}`;

    window.open(
      `https://wa.me/923288699236?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  return (
    <main>
      {/* ===== BANNER ===== */}
      <section className="page-banner">
        <span className="section-label">GET IN TOUCH</span>
        <h1>
          Let's Start A <span>Conversation.</span>
        </h1>
        <p>Have a project or business requirement? Contact our team.</p>
      </section>

      <section className="contact-wrap">
        {/* ===== LEFT: CONTACT DETAILS ===== */}
        <div className="contact-info">
          <h2>Contact Details</h2>

          <a href="mailto:nivoradigital1029@gmail.com" className="info-card">
            <Mail />
            <div>
              <small>Email Us</small>
              <p>nivoradigital1029@gmail.com</p>
            </div>
          </a>

          <a href="tel:+923288699236" className="info-card">
            <Phone />
            <div>
              <small>Call Us</small>
              <p>+92 328 8699236</p>
            </div>
          </a>

          <a
            href="https://wa.me/923288699236"
            target="_blank"
            rel="noreferrer"
            className="info-card"
          >
            <MessageCircle />
            <div>
              <small>WhatsApp</small>
              <p>Chat With Us</p>
            </div>
          </a>
        </div>

        {/* ===== RIGHT: FORM ===== */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us A Message</h2>

          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">Select A Service</option>
            {services.map((item) => (
              <option key={item.slug} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>

          <textarea
            rows="5"
            placeholder="Your Message *"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="gold-btn">
            Send On WhatsApp <Send size={17} />
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
