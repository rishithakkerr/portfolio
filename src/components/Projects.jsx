// Projects.jsx
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "This website — built using React functional components and plain CSS. Structured with reusable components for each section, using React Router for navigation and a clean, minimal design system.",
    tech: ["React", "JSX", "CSS", "React Router"],
    status: "Live",
    href: "https://github.com/rishithakkerr",
  },
  {
    id: 2,
    title: "Password Strength Checker",
    description:
      "A React app that checks password strength in real time. Evaluates length, numbers, symbols, and uppercase letters — giving instant visual feedback as you type.",
    tech: ["React", "JSX", "CSS"],
    status: "Completed",
    href: null,
  },
  {
    id: 3,
    title: "Coffee Shop",
    description:
      "An interactive coffee shop webpage built with HTML, CSS, and JavaScript. Features a dynamic menu and UI interactions — a hands-on project exploring DOM manipulation.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    href: "https://github.com/rishithakkerr/JavaScript/tree/main/Coffee%20Shop",
  },
  {
    id: 4,
    title: "Nature Page",
    description:
      "A themed multi-section web page about nature, built with HTML5 and CSS3. Focuses on layout design, image handling, and visual hierarchy using modern CSS techniques.",
    tech: ["HTML", "CSS"],
    status: "Completed",
    href: "https://github.com/rishithakkerr/HTML/tree/main/Nature%20Page",
  },
  {
    id: 5,
    title: "Tribute Page",
    description:
      "A clean tribute page built as a foundational HTML/CSS project. Demonstrates semantic HTML structure, styling typography, and responsive layout fundamentals.",
    tech: ["HTML", "CSS"],
    status: "Completed",
    href: "https://github.com/rishithakkerr/HTML/blob/main/Trib.html",
  },
  {
    id: 6,
    title: "JS Mini Project",
    description:
      "A mini web application built with vanilla JavaScript exploring interactivity, DOM events, and dynamic content updates without any frameworks.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: "Completed",
    href: "https://github.com/rishithakkerr/JavaScript/tree/main/Mini%20Project",
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
