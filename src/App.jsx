import React from "react";
import { Sun, Moon } from "lucide-react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  const [timeOfDay, setTimeOfDay] = React.useState(() => {
    const date = new Date();
    const currentHour = date.getHours();

    if (currentHour < 12) return "morning";
    if (currentHour >= 12 && currentHour < 18) return "afternoon";
    if (currentHour >= 18) return "night";
  });
  const [closeHeader, setCloseHeader] = React.useState(false);
  const [showNextProject, setShowNextProject] = React.useState(0);

  function changeTime() {
    switch (timeOfDay) {
      case "morning":
        setTimeOfDay("afternoon");
        break;
      case "afternoon":
        setTimeOfDay("night");
        break;

      default:
        setTimeOfDay("morning");
        break;
    }
  }

  return (
    <main className={closeHeader ? `closeHeader ${timeOfDay}` : timeOfDay}>
      <div className="top-fixed">
        <p>fernanda esteves</p>

        <button onClick={changeTime} className="time-icon">
          <div>
            {timeOfDay == "night" && <Moon size={32} />}
            {timeOfDay !== "night" && <Sun size={32} />}
          </div>
        </button>
        <p>
          <a href="https://github.com/esteves-esta/" target="_blank">
            esteves-esta
          </a>
        </p>
      </div>

      <Header closeHeader={closeHeader} timeOfDay={timeOfDay} />

      <Nav
        closeHeader={closeHeader}
        setCloseHeader={setCloseHeader}
        showNextProject={showNextProject}
        setShowNextProject={setShowNextProject}
      />

      <Projects closeHeader={closeHeader} showNextProject={showNextProject} />
    </main>
  );
}

export default App;
