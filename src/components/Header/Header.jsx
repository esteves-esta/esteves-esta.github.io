import {
  Puzzle,
  PlusCircle,
  MessageSquareHeart,
  Sparkles,
  Palette,
  Headphones,
  BookHeart,
  Rocket,
  Brain,
  HeartHandshake,
} from "lucide-react";
import React from "react";
import classes from "./styles.module.css";

function Header({ closeHeader, timeOfDay }) {
  const aboutMeList = [
    {
      text: "sou a fernanda e trabalho como desenvolvedora frontend a 4 anos e",
      icon: PlusCircle,
    },
    {
      text: "sou uma pessoa introvertida e meus hobbies se refletem nisso, amo plantas, quebra-cabeças, livros; e além disso",
      icon: Puzzle,
    },
    {
      text: "sou uma pessoa que tenho gosto por manter os projetos organizados e documentados e segundo um feedback de um colega de trabalho 'o contéudo que a fernanda adiciona na wiki é sempre muito bem escrito, bem detalhado e organizado, e já me foram úteis em múltiplas ocasiões', e",
      icon: BookHeart,
    },
    {
      text: "sou formada em design gráfico e desenvolvimento de sistemas então já prototipei e desenvolvi funcionalidades; e também",
      icon: Palette,
    },
    {
      text: "eu sou uma pessoa que 'abraça com positividade toda mudança e novidade e participa da melhor forma possível' (feedback de uma gestora direta)",
      icon: MessageSquareHeart,
    },
    {
      text: "amo todos os gêneros de música, estou sempre de fone de ouvido e",
      icon: Headphones,
    },
    {
      text: "sou 'uma pessoa que domina o que faz, que sabe passar seu conhecimento aos outros, muito dedicada e inteligente' (feedback de um colega), e",
      icon: Brain,
    },
    {
      text: "sou uma pessoa proativa e muitas vezes já adiantei as tarefas que precisavam ser realizadas, e",
      icon: Sparkles,
    },
    {
      text: "sou uma pessoa que 'aceita os desafios propostos e busca soluções inovadoras' (feedback de um gestor direto), e também",
      icon: Rocket,
    },
    {
      text: "sou uma pessoa 'participativa, engajada e que apoia o time com troca de conhecimento, visão critíca e pensa fora da caixa' (feedback de uma gestora direta)",
      icon: HeartHandshake,
    },
    // {
    //   text: "amo digitar do jeito 'touch-typing' (digitação com todos os dedos e sem olhar o teclado) e fiz até uma lista com jogos e sites de pratica no meu github",
    //   icon: HeartHandshake,
    // },
    // {
    //   text: "joguei recentemente 'A little to the left' e simplesmente amei",
    //   icon: HeartHandshake,
    // },

    /* sou uma pessoa que "busca entender o negócio e entregar sistemas adequados às necessidades" (feedback de um gestor direto) */
  ];

  const [aboutIndex, setAboutIndex] = React.useState(0);
  const [aboutMeText, setAboutMeText] = React.useState(
    aboutMeList[aboutIndex].text
  );
  const [AboutMeIcon, setAboutMeIcon] = React.useState(
    aboutMeList[aboutIndex].icon
  );

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

        <button
          tabIndex={closeHeader ? -1 : 0}
          onClick={changeAboutMe}
          className={classes.aboutMe}
        >
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
