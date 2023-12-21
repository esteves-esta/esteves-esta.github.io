import classes from "./styles.module.css";

function Nav({
  showNextProject,
  setShowNextProject,
  setCloseHeader,
  closeHeader,
}) {
  const toggleProjects = () => {
    if (showNextProject === 2) {
      setShowNextProject(1);
      return;
    }

    setCloseHeader(!closeHeader);
    setShowNextProject(0);
    if (!closeHeader) setShowNextProject(1);
  };

  const goToNextProject = () => {
    switch (showNextProject) {
      case 1:
        setShowNextProject(2);
        break;
      case 2:
        setShowNextProject(1);
        break;
    }
  };

  return (
    <nav className={classes.navigation}>
      <button onClick={toggleProjects}>
        {!closeHeader ? (
          <>
            <span>sinta-se a vontade para olhar os meus projetos</span>
            <span className={classes.emoticon}>=( •ᴗ- )=</span>
          </>
        ) : (
          <span>voltar</span>
        )}
      </button>
      <br />
      {closeHeader && showNextProject == 1 && (
        <button onClick={goToNextProject}>
          <span>próximo</span>
        </button>
      )}
    </nav>
  );
}

export default Nav;
