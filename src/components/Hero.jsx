// Hero.jsx
import { Link } from "react-router-dom";
import TiltedCard from "./TiltedCard";
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
          Computer Science student at ITM Skills University. Previously studied at NJIT, New Jersey. Interested in web development, technology, and business.
        </p>
        <Link to="/contact" className="btn-primary">
          Get in touch
        </Link>
      </div>

      <TiltedCard
        imageSrc="/pp.JPG"
        altText="Rishi Thakker"
        containerSize="180px"
        scaleOnHover={1.07}
        rotateAmplitude={14}
      />
    </section>
  );
}

export default Hero;
