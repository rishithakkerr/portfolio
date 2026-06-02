// Contact.jsx
// Contact section with email, GitHub, and LinkedIn links

import "./Contact.css";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "rishimthakker@gmail.com",
    href: "mailto:rishimthakker@gmail.com",
    display: "rishimthakker@gmail.com",
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/rishithakker",
    href: "https://github.com/rishithakker",
    display: "github.com/rishithakker",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/rishithakker",
    href: "https://linkedin.com/in/rishithakker",
    display: "linkedin.com/in/rishithakker",
  },
];

function ContactCard({ link }) {
  return (
    <a
      className="contact-card"
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        <p className="contact-label">{link.label}</p>
        <p className="contact-value">{link.display}</p>
      </div>
    </a>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <div className="section-divider"></div>

        <p className="contact-intro">
          I'm open to internships, collaborations, and new opportunities.
          Feel free to reach out — I'd love to hear from you!
        </p>

        <div className="contact-grid">
          {contactLinks.map((link) => (
            <ContactCard key={link.id} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
