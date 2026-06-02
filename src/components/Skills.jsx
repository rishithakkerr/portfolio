// Skills.jsx
import "./Skills.css";
import MagicBento from "./MagicBento";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section">
        <h2 className="section-title">My <span>Skills</span></h2>
        <div className="section-divider"></div>

        <MagicBento
          textAutoHide={true}
          enableStars={false}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={false}
          spotlightRadius={300}
          particleCount={0}
          glowColor="37, 99, 235"
        />
      </div>
    </section>
  );
}

export default Skills;
