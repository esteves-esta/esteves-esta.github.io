import {
  Puzzle,
  PlusCircle,
  Asterisk,
  Sparkles,
  Figma,
  Headphones,
  Ampersand,
} from "lucide-react";
import React from "react";
import classes from "./styles.module.css";

function Header({ timeOfDay }) {
  const aboutMeList = [
    {
      text: "sou a fernanda e trabalho como desenvolvedora frontend a 4 anos e",
      icon: PlusCircle,
    },
    {
      text: "sou uma pessoa introvertida e meus hobbies se refletem nisso, amo plantas, quebra-cabeças, livros, além disso",
      icon: Puzzle,
    },
    {
      text: "sou formada tanto em design e desenvolvimento de sistemas então já tive a oportunidade de prototipar e desenvolver funcionalidades; e também",
      icon: Figma,
    },
    {
      text: "amo todos os gêneros de música, estou sempre de fone de ouvido e",
      icon: Headphones,
    },
    {
      text: "sou uma pessoa proativa e muitas vezes já adiantei as tarefas que precisavam ser realizadas",
      icon: Sparkles,
    },
    {
      text: "sou uma pessoa objetiva e gosto de foco e organização.",
      icon: Asterisk,
    },
  ];

  const [aboutIndex, setAboutIndex] = React.useState(0);
  const [aboutMeText, setAboutMeText] = React.useState(aboutMeList[aboutIndex].text);
  const [AboutMeIcon, setAboutMeIcon] = React.useState(aboutMeList[aboutIndex].icon);


  function changeAboutMe() {
    let newIndex = aboutIndex + 1;
    if (aboutMeList.length === newIndex) newIndex = 0;
    setAboutIndex(newIndex);
    setAboutMeText(aboutMeList[newIndex].text);
    setAboutMeIcon(aboutMeList[newIndex].icon);
  }

  return (
    <header className={classes.header}>
      <div className="header-content">
        <h1>
          {timeOfDay == "morning" && "bom dia"}
          {timeOfDay == "afternoon" && "boa tarde"}
          {timeOfDay == "night" && "boa noite"}
          <span className={classes.emoticon}>\(^-^)/</span>
        </h1>
        <h1>bem vindo ao meu portfolio</h1>

        <button onClick={changeAboutMe} className={classes.aboutMe}>
          <span>
            {aboutMeText}
            <span>‧₊˚‧⁺˖</span>
          </span>
          <AboutMeIcon size={22} />
        </button>
        
      </div>
    </header>
  );
}

export default Header;
