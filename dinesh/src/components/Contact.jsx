import React, { useState } from "react";
import HackerText from "./HackerText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // success or error message
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/send-contact-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        setStatus("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-heading">
        <HackerText text="Contact" />
      </div>

      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <div className="contact-card">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <h3>Email</h3>
            <p className="value">dineshvattipally45@gmail.com</p>
            <a href="mailto:dineshvattipally45@gmail.com" className="action">
              Write me <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className="contact-card">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
            <h3>LinkedIn</h3>
            <p className="value">
              <a
                href="https://www.linkedin.com/in/dinesh-vattipally"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dinesh Vattipally
              </a>
            </p>
            <a
              href="https://www.linkedin.com/in/dinesh-vattipally"
              target="_blank"
              rel="noopener noreferrer"
              className="action"
            >
              Visit <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className="contact-card">
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            <h3>WhatsApp</h3>
            <p className="value">+91 8104043782</p>
            <a
              href="https://wa.me/918104043782"
              target="_blank"
              rel="noopener noreferrer"
              className="action"
            >
              Message me <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Insert your name"
                required
              />
              <label>---- Name ----</label>
            </div>

            <div className="input-box">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Insert your email"
                required
              />
              <label>---- Email ----</label>
            </div>

            <div className="input-box textarea-box">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Insert your Message"
                required
              ></textarea>
              <label>---- Message ----</label>
            </div>

            <button type="submit" className="send-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p style={{ marginTop: "10px", color: "#64ffda" }}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
