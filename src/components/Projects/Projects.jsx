import ProjectWomenBands from "./ProjectWomenBands";
import ProjectHumansOfSeoul from "./ProjectHumansOfSeoul";
import ProjectOnePageCalendar from "./ProjectOnePageCalendar";

function Projects({ showNextProject, closeHeader }) {
  const projectClass = (page) =>
    showNextProject === page ? `currentPage` : "";

  return (
    <div
      className={
        showNextProject >= 2
          ? `show-next${showNextProject} projects`
          : "projects"
      }
    >
      <article className={projectClass(1)}>
        <ProjectWomenBands closeHeader={closeHeader} />
      </article>

      <article className={projectClass(2)}>
        <ProjectHumansOfSeoul />
      </article>

      <article className={projectClass(3)}>
        <ProjectOnePageCalendar />
      </article>
    </div>
  );
}

export default Projects;
