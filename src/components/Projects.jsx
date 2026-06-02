// Projects.jsx
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "Personal portfolio built with React and React Router, featuring reusable components and a clean responsive design.",
    tech: ["React", "JSX", "CSS", "React Router"],
    status: "Live",
    href: "https://github.com/rishithakkerr",
  },
  {
    id: 2,
    title: "Password Strength Checker",
    description:
      "React app that evaluates password strength in real time using multiple validation rules.",
    tech: ["React", "JSX", "CSS"],
    status: "Completed",
    href: null,
  },
  {
    id: 3,
    title: "Coffee Shop",
    description:
      "Interactive coffee shop website built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    href: "https://github.com/rishithakkerr/JavaScript/tree/main/Coffee%20Shop",
  },
  {
    id: 4,
    title: "Nature Page",
    description:
      "Responsive multi-section webpage focused on modern CSS layouts and imagery.",
    tech: ["HTML", "CSS"],
    status: "Completed",
    href: "https://github.com/rishithakkerr/HTML/tree/main/Nature%20Page",
  },
  {
    id: 5,
    title: "Tribute Page",
    description:
      "Simple responsive webpage demonstrating semantic HTML and CSS fundamentals.",
    tech: ["HTML", "CSS"],
    status: "Completed",
    href: "https://github.com/rishithakkerr/HTML/blob/main/Trib.html",
  },
  {
    id: 6,
    title: "JS Mini Project",
    description:
      "Mini JavaScript application showcasing DOM manipulation and interactivity.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    href: "https://github.com/rishithakkerr/JavaScript/tree/main/Mini%20Project",
  },
  {
    id: 7,
    title: "Ticket Booking Page",
    description: "Event ticket booking page built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    href: "https://github.com/rishithakkerr/JHCProject",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-body">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-status">{project.status}</span>
        </div>
        <p className="project-desc">{project.description}</p>
        <div className="project-footer">
          <div className="project-tags">
            {project.tech.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="section">
        <h2 className="section-title">My <span>Projects</span></h2>
        <div className="section-divider"></div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
