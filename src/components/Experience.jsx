// Experience.jsx
import "./Experience.css";

const experiences = [
  {
    id: 1,
    role: "Content Translator & Designer",
    org: "Allern Enterprises",
    period: "March 2025 – August 2025",
    location: "Mumbai, India",
    points: [
      "Translated Hinglish scripts into fluent English.",
      "Edited content for clarity and accuracy.",
      "Produced English audio using AI voice tools.",
    ],
  },
  {
    id: 2,
    role: "Administrative Student Assistant",
    org: "Robert Van Houten Library, NJIT",
    period: "September 2023 – December 2024",
    location: "Newark, USA",
    points: [
      "Managed spreadsheets and administrative records.",
      "Assisted with data entry and document digitization.",
      "Supported front desk and library operations.",
    ],
  },
  {
    id: 3,
    role: "Social Media Growth & Content Creator",
    org: "Independent",
    period: "September 2023 – 2024",
    location: "Newark, USA",
    points: [
      "Grew a TikTok page to 17,000+ followers.",
      "Created content with a top video reaching 4.5M views.",
      "Received audience buyout offers exceeding $8,000.",
    ],
  },
  {
    id: 4,
    role: "Partner",
    org: "Heka & Hera",
    period: "March 2020 – Present",
    location: "Mumbai, India",
    points: [
      "Co-manage operations, marketing, and customer support.",
      "Oversee supply chain and vendor coordination.",
      "Designed and built the company website.",
    ],
  },
  {
    id: 5,
    role: "Volunteer",
    org: "Lala Foundation",
    period: "October 2018 – Present",
    location: "Mumbai, India",
    points: [
      "Help organize medical camps and community events.",
      "Gather participant feedback and event data.",
      "Support logistics and on-ground coordination.",
    ],
  },
  {
    id: 6,
    role: "General Body Member",
    org: "Rotaract Club Mulund Hill View",
    period: "2022 – 2023",
    location: "Mumbai, India",
    points: [
      "Participated in community service initiatives.",
      "Maintained records and member data.",
      "Assisted in event planning and execution.",
    ],
  },
];

function ExperienceCard({ exp }) {
  return (
    <div className="exp-card">
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
