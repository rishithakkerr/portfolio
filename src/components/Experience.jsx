// Experience.jsx
import "./Experience.css";

const experiences = [
  {
    id: 1,
    role: "Content Translator & Designer",
    org: "Allern Enterprises",
    period: "March 2025 – August 2025",
    location: "Mumbai, India",
    emoji: "🎙️",
    points: [
      "Created and translated Hinglish transcripts into fluent English for video content.",
      "Used AI tools and manual editing to ensure accuracy and natural language flow.",
      "Generated high-quality English audio using voice cloning technology.",
    ],
  },
  {
    id: 2,
    role: "Administrative Student Assistant",
    org: "Robert Van Houten Library, NJIT",
    period: "September 2023 – December 2024",
    location: "Newark, USA",
    emoji: "📚",
    points: [
      "Managed spreadsheets for payroll, personnel, and purchase orders.",
      "Handled administrative tasks including data entry, scanning, and digitizing materials.",
      "Provided front desk support and dealt with library patrons.",
    ],
  },
  {
    id: 3,
    role: "Social Media Growth & Content Creator",
    org: "Independent",
    period: "September 2023 – 2024",
    location: "Newark, USA",
    emoji: "📱",
    points: [
      "Founded and grew a TikTok page from scratch to 17,000+ followers organically.",
      "Created engaging content; highest-viewed video reached 4.5 million views.",
      "Attracted buyout offers exceeding $8,000 due to strong audience engagement.",
    ],
  },
  {
    id: 4,
    role: "Partner",
    org: "Heka & Hera",
    period: "March 2020 – Present",
    location: "Mumbai, India",
    emoji: "🏢",
    points: [
      "Co-manage all business operations including marketing, bookkeeping, and customer support.",
      "Handle supply chain management, product manufacturing, and vendor networking.",
      "Designed and built the company's website from scratch.",
    ],
  },
  {
    id: 5,
    role: "Volunteer",
    org: "Lala Foundation",
    period: "October 2018 – Present",
    location: "Mumbai, India",
    emoji: "❤️",
    points: [
      "Coordinate and manage free medical camps for underprivileged communities.",
      "Collect and analyse attendee feedback during summer and winter breaks.",
      "Support event logistics and on-ground coordination.",
    ],
  },
  {
    id: 6,
    role: "General Body Member",
    org: "Rotaract Club Mulund Hill View",
    period: "2022 – 2023",
    location: "Mumbai, India",
    emoji: "🌀",
    points: [
      "Participated in community service drives and event organisation.",
      "Collected member data and maintained departmental records.",
      "Led small independent departments for specific club initiatives.",
    ],
  },
];

function ExperienceCard({ exp }) {
  return (
    <div className="exp-card">
      <div className="exp-dot">{exp.emoji}</div>
      <div className="exp-content">
        <div className="exp-header">
          <div>
            <h3 className="exp-role">{exp.role}</h3>
            <p className="exp-org">{exp.org}</p>
          </div>
          <span className="exp-period">{exp.period}</span>
        </div>
        <ul className="exp-points">
          {exp.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section">
        <h2 className="section-title">My <span>Experience</span></h2>
        <div className="section-divider"></div>
        <div className="exp-list">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
