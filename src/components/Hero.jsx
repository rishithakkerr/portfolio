// Hero.jsx
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <span className="hero-badge">Hello, I'm</span>
        <h1 className="hero-name">Rishi Thakker</h1>
        <p className="hero-subtitle">
          BTech CSE Student &nbsp;·&nbsp; Aspiring Web Developer
        </p>
        <div className="hero-rule"></div>
        <p className="hero-intro">
          Computer Science student at ITM Skills University, Mumbai. Previously studied
          at NJIT, New Jersey. Passionate about building clean web applications and exploring
          the intersection of technology and business.
        </p>
        <Link to="/contact" className="btn-primary">
          Get in touch
        </Link>
      </div>
      <div className="hero-avatar" aria-hidden="true">
        <span>RT</span>
      </div>
    </section>
  );
}

export default Hero;
