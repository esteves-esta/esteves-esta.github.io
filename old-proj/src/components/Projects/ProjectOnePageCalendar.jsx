// import React from 'react';
import classes from "./styles.module.css";
import projectImgSrc from "../../assets/onepage-calendar/info-window.png";
import projectImgSrc2 from "../../assets/onepage-calendar/event-saved.png";
import projectImgSrc3 from "../../assets/onepage-calendar/events-more.png";
import projectImgSrc4 from "../../assets/onepage-calendar/header-baseCustomizations.png";
import projectImgSrc5 from "../../assets/onepage-calendar/header-monthCustomization.png";
import wallpaper from "../../assets/onepage-calendar/wallpaper-2023.jpg";
import projectImgSrc7 from "../../assets/onepage-calendar/header-savingEvent.png";
import projectTopImgSrc from "../../assets/onepage-calendar/header-weekCustomizations.png";
2;
function ProjectOnePageCalendar({ closeHeader }) {
  return (
    <div className={`content ${classes.projectContent}`}>
      <div>
        <section>
          <h3>One Page Calendar</h3>
          <p className={classes.subtitle}>
            Projeto inspirado{" "}
            <a
              tabIndex={!closeHeader ? -1 : 0}
              href="https://bigthink.com/starts-with-a-bang/one-page-calendar/"
              target="_blank"
              rel="noreferrer"
            >
              neste artigo da revista BigThink
            </a>{" "}
            sobre um modelo de calendário de 1 página.
          </p>
        </section>

        <section>
          <h4>Funcionalidades</h4>
          <ul>
            <li>
              Visualização de qualquer ano no formato 1 página apresentado no
              artigo;
            </li>
            <li>
              Customização;
              <ul>
                <li>Registra todos os dados no Local Storage;</li>
                <li>Customização geral do site;</li>
                <li>Customização por seção (dias, semanas, meses);</li>
                <li>
                  Customização do label do dia da semana (ex: inserir emojis);
                </li>
              </ul>
            </li>
            <li>Modais arrastáveis (draggables);</li>
            <li>
              Salvar datas;
              <ul>
                <li>
                  Clicando em um dia e em um mês exibe a opção de salvar a data
                  como um evento;
                </li>
                <li>Meses com eventos salvos exibem a contagem de eventos;</li>
                <li>
                  Clicando em um mês preenche a cor de fundo dos dias que
                  possuem eventos;
                </li>
                <li>Modal exibindo todos os eventos ordenados por data;</li>
                <li>Opção de excluir um evento;</li>
                <li>Opção de excluir todos eventos;</li>
                <li>Exportar eventos como .csv .</li>
              </ul>
            </li>
          </ul>
        </section>

        <img
          src={projectTopImgSrc}
          alt="Imagem do projeto com janela de customização por dia da semana"
        />

        <hr />

        <section>
          <h4>Objetivo</h4>

          <img
            className={classes.imgs}
            src={projectImgSrc7}
            alt="Imagem do site, com os modais de salvar evento e eventos abertos"
          />

          <p>
            Tenho há alguns anos interesse por calendários, principalmente a
            visualização do calendário em uma única página. Algo bem específico,
            eu sei XD. Antigamente eu criava um calendário anual de forma manual
            mesmo e com colagens no fim de ano, e recentemente começei a
            realizar esse processo de criação no figma.
          </p>

          <p>
            Após ler o artigo do BigThink achei a ideia super legal e achei que
            poderia criar um wallpaper com os dias da semana em coreano e também
            os kanjis/hanjas para ajudar no aprendizado. E depois quando estava
            praticando para o curso "Joy of React" achei que poderia ser uma boa
            criar um site com React.
          </p>
          <img
            className={classes.imgs}
            src={wallpaper}
            alt="Imagem do meu wallpaper"
          />
          <small>
            A imagem do fundo do wallpaper é do{" "}
            <a
              tabIndex={!closeHeader ? -1 : 0}
              href="https://space.workbymark.nl/"
              target="_blank"
              rel="noreferrer"
            >
              Mark Hendriks.
            </a>
          </small>
        </section>

        <hr />

        <section>
          <h4>Desafios</h4>
          <img
            className={classes.imgs}
            src={projectImgSrc5}
            alt="Imagem do site, com janela de customização dos meses"
          />

          <p>
            No geral diria que foi um desafio organizar o código, o contexto de
            cada customização, penso ainda em refatorar o código e melhora-lo.
          </p>

          <p>
            Inicialmente queria simplesmente usar o input de cor padrão do HTML
            porém acabei no percurso do projeto criando meu próprio componente.
            Não criei um colorwheel, decide por algo mais simples mas mesmo
            assim levou trabalho pensar no que seria melhor para o uso. Comecei
            o componente com RGBA e depois passei para HSLA, e no layout usei
            css grid.
          </p>

          <p>
            Também fui desafiada com o css devido a quantidade de customização,
            tive que planejar e organizar bem o css para que tudo desse certo.
          </p>
        </section>

        <hr />

        <section>
          <h4>Aprendizados</h4>
          <img
            className={classes.imgs}
            src={projectImgSrc3}
            alt="Imagem do site, com janela de eventos salvos aberto e preenchido"
          />
          <p>
            Consegui praticar bastante css grids nesse projeto e também, como
            inicialmente tinha pensado em criar o projeto com svg também aprendi
            vários usos novos para svg em uma aplicação.
          </p>

          <p>
            Também realizei este projeto sem protótipo, diferente dos meus
            outros projetos pois achei que sendo só um calendário seria simples
            porém acabei depois tendo que gastar um tempinho pensando na UI.
            Mesmo um projeto simples na questão do layout teria sido bom ter
            criado um protótipo pra depois não ter que decidir questões de UI o
            desenvolvimento do projeto.
          </p>
        </section>
      </div>

      <aside>
        <img
          className={classes.imgs}
          src={projectImgSrc}
          alt="Imagem do site, com várias janelas abertas, sendo a primeira a janela sobre o projeto"
        />

        <section>
          <h4>links</h4>
          <ul>
            <li>
              <a
                tabIndex={!closeHeader ? -1 : 0}
                href="https://esteves-esta.github.io/one-page-calendar/"
                target="_blank"
              >
                site
              </a>
            </li>
            <li>
              <a
                tabIndex={!closeHeader ? -1 : 0}
                href="https://github.com/esteves-esta/one-page-calendar"
                target="_blank"
              >
                repositório
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h4>tech stack</h4>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>Javascript</li>
            <li>RadixUI Unstyled</li>
            <li>React-draggable</li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

export default ProjectOnePageCalendar;
