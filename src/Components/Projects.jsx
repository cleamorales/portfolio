import "./Styles/Projects.css";
import ProjectsData from "../data/ProjectsData";

function Projects() {
  return (
    <section id="projects" className="projects">

      <h2 className="projects-title">PROJECTS</h2>

      <div className="projects-container">
        {ProjectsData.map((project) => (
          <div className="project-card" key={project.id}>

            {project.image && (
              <div className="project-image">
                <img src={project.image} alt={`${project.title} screenshot`} />
              </div>
            )}

            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-stack">{project.stack}</p>
          

            <div className="project-links">
              {project.links.github && <a href={project.links.github}>GitHub</a>}
              {project.links.demo && <a href={project.links.demo}>Live Demo</a>}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;
