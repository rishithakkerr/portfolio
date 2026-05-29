// Skills.jsx
import "./Skills.css";

const skills = [
  // Web
  { name: "HTML",             emoji: "🌐", category: "Web" },
  { name: "CSS",              emoji: "🎨", category: "Web" },
  { name: "JavaScript",       emoji: "⚡", category: "Web" },
  { name: "React",            emoji: "⚛️",  category: "Web" },
  // Programming
  { name: "C++",              emoji: "🔧", category: "Programming" },
  { name: "Python",           emoji: "🐍", category: "Programming" },
  { name: "Java",             emoji: "☕", category: "Programming" },
  { name: "QBasic",           emoji: "💾", category: "Programming" },
  // Tools
  { name: "Microsoft Office", emoji: "📄", category: "Tools" },
  { name: "DaVinci Resolve",  emoji: "🎬", category: "Tools" },
  { name: "iMovie",           emoji: "🎥", category: "Tools" },
  // Content & AI
  { name: "AI Voice Cloning", emoji: "🎙️", category: "AI & Content" },
  { name: "Transcription",    emoji: "📝", category: "AI & Content" },
  { name: "Video Editing",    emoji: "✂️",  category: "AI & Content" },
  // Admin
  { name: "Spreadsheets",     emoji: "📊", category: "Administration" },
  { name: "Data Entry",       emoji: "🗃️", category: "Administration" },
  { name: "Customer Service", emoji: "💬", category: "Administration" },
];

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <span className="skill-emoji">{skill.emoji}</span>
      <span className="skill-name">{skill.name}</span>
      <span className="skill-category">{skill.category}</span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section">
        <h2 className="section-title">My <span>Skills</span></h2>
        <div className="section-divider"></div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
