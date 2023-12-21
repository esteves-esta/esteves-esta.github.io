// import React from 'react';
import classes from "./styles.module.css";

function Projects({ showNextProject }) {
  const projectClass =
    showNextProject === 1 ? `currentPage` : '';
  return (
    <article className={showNextProject === 2 ? "projects" : ""}>
      <section className={projectClass}>
        <div className="content">
          <h1>teste1</h1>
          <p>teste1</p>

          
        </div>
      </section>

      <section className={showNextProject === 2 ? "currentPage" : ""}>
        <div className="content">
          <p>teste2</p>
        </div>
      </section>
    </article>
  );
}

export default Projects;
