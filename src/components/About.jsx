// About.jsx
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="section-divider"></div>

        <div className="about-layout">
          <div className="about-text">
            <p>
              Hi! I'm <strong>Rishi Thakker</strong>, a BTech Computer Science & Engineering student at
              ITM Skills University. I'm passionate about web development and love
              building clean, useful applications — currently deepening my React skills
              and working across HTML, CSS, and JavaScript.
            </p>
            <p>
              Beyond coding, I'm drawn to the intersection of <strong>technology and business</strong>.
              I co-manage a small business called Heka & Hera, which has taught me everything
              from supply chain and marketing to building a website from scratch. I also spent
              a year at <strong>New Jersey Institute of Technology</strong> studying CS before returning to Mumbai.
            </p>
            <p>
              I believe in giving back — I've volunteered with the Lala Foundation and
              participated in community service through the Rotaract Club. Outside of tech,
              I've grown a TikTok page to 17,000+ followers organically, with a video
              reaching 4.5 million views.
            </p>

            <div className="about-facts">
              <div className="fact-card">
                <span className="fact-icon">🎓</span>
                <div>
                  <strong>BTech CSE</strong>
                  <p>ITM Skills University</p>
                </div>
              </div>
              <div className="fact-card">
                <span className="fact-icon">📍</span>
                <div>
                  <strong>Based in</strong>
                  <p>Mumbai, India</p>
                </div>
              </div>
              <div className="fact-card">
                <span className="fact-icon">💻</span>
                <div>
                  <strong>Focus</strong>
                  <p>Web Development</p>
                </div>
              </div>
              <div className="fact-card">
                <span className="fact-icon">🌍</span>
                <div>
                  <strong>Also studied at</strong>
                  <p>NJIT, New Jersey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
