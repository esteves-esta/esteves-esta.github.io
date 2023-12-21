import ProjectWomenBands from "./ProjectWomenBands";
import classes from "./styles.module.css";

function Projects({ showNextProject }) {
  const projectClass = showNextProject === 1 ? `currentPage` : "";
  return (
    <div className={showNextProject === 2 ? "show-next projects" : "projects"}>
      <article className={projectClass}>
        <ProjectWomenBands />
      </article>

      <article className={showNextProject === 2 ? "currentPage" : ""}>
        <div className="content">
          <p>teste2</p>
        </div>
      </article>
    </div>
  );
}

export default Projects;
