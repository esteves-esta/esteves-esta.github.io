import React from "react";
import { Sun, Moon } from "lucide-react";
import Header from "./components/Header";
import Nav from './components/Nav'
import Projects from "./components/Projects";

function App() {
  const [timeOfDay] = React.useState(() => {
    const date = new Date();
    const currentHour = date.getHours(); 
    if (currentHour < 12 ) return "morning";
    if (currentHour >= 12 && currentHour < 18) return "afternoon";
    if (currentHour >= 18 && currentHour < 4) return "night";
  });
  const [closeHeader, setCloseHeader] = React.useState(false);
  const [showNextProject, setShowNextProject] = React.useState(0);

  return (
    <main className={closeHeader ? `closeHeader ${timeOfDay}` : timeOfDay}>
      <div className="top-fixed">
        <p>fernanda esteves</p>
        <div className="time-icon">
          {timeOfDay == "night" && <Moon size={32} />}
          {timeOfDay !== "night" && <Sun size={32} />}
        </div>
        <p>esteves-esta</p>
      </div>

      <Header timeOfDay={timeOfDay}/>

      <Nav
        closeHeader={closeHeader}
        setCloseHeader={setCloseHeader}
        showNextProject={showNextProject}
        setShowNextProject={setShowNextProject}
      />

      <Projects showNextProject={showNextProject} />
    </main>
  );
}

export default App;
