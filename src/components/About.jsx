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
              Hi, I'm <strong>Rishi Thakker</strong>, a BTech Computer Science student at ITM Skills University.
            </p>
            <p>
              I'm passionate about web development and build practical applications using HTML, CSS, JavaScript, and React.
            </p>
            <p>
              I co-manage Heka & Hera (operations, supply chain, and website) and have volunteered with the Lala Foundation and Rotaract. I also grew a TikTok page to 17,000+ followers with videos reaching 4.5M views.
            </p>

            <div className="about-facts">
              <div className="fact-card">
                <div>
                  <strong>BTech CSE</strong>
                  <p>ITM Skills University</p>
                </div>
              </div>
              <div className="fact-card">
                <div>
                  <strong>Based in</strong>
                  <p>Mumbai, India</p>
                </div>
              </div>
              <div className="fact-card">
                <div>
                  <strong>Focus</strong>
                  <p>Web Development</p>
                </div>
              </div>
              <div className="fact-card">
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
