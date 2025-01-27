// import React from 'react';
import classes from "./styles.module.css";
import projectImgSrc2 from "../../assets/humans-of-seoul/header-readme-papago-popover.png";
import projectImgSrc3 from "../../assets/humans-of-seoul/header-readme-customization.png";
import projectImgSrc from "../../assets/humans-of-seoul/header-readme-list.png";
import projectTopImgSrc from "../../assets/humans-of-seoul/header-readme.png";

function ProjectHumansOfSeoul({ closeHeader }) {
  return (
    <div className={`content ${classes.projectContent}`}>
      <div>
        <section>
          <h3>Humans of Seoul</h3>
          <p className={classes.subtitle}>
            Projeto criado para ler o RSS Feed do site Humans of Seoul em
            coreano com a tradução podendo ser habilitada quando desejado.
          </p>
        </section>

        <section>
          <h4>Funcionalidades</h4>
          <ul>
            <li>
              Customizações;
              <ul>
                <li>Mudança de tema de cor;</li>
                <li>Tamanho, espessura e familia de fonte;</li>
                <li>Espaçamento de palavras e linha;</li>
              </ul>
            </li>
            <li>Manter tradução escondida e exibindo por linha;</li>
            <li>
              Selecionar palavas do original coreano e exporta-las para usar no
              Anki;
            </li>
            <li>
              Ao passar o mouse por uma palavra em coreano exibir popover com
              link para o dicionário Papago;
            </li>
            <li>
              Salvar customizações e palavras selecionadas no Local Storage.
            </li>
          </ul>
        </section>

        <img src={projectTopImgSrc} alt="Imagem do projeto" />

        <hr />

        <section>
          <h4>Objetivo</h4>
          <img
            className={classes.imgs}
            src={projectImgSrc}
            alt="Imagem do site, visão geral"
          />

          <p>
            Tenho interesse em várias linguas e recentemente tenho começado a
            aprender coreano. Por isso para praticar o idioma comecei a procurar
            contéudo online em coreano e com tradução e encontrei o site "Humans
            of Seoul". Igual o original de Nova York este projeto entrevista
            pessoas da cidade e disponibiliza a pequena entrevista com uma foto.
          </p>

          <p>
            No site do projeto está disponibilizado um abaixo do outro, o texto
            original em coreano e a tradução em inglês. Como o site possui um
            RSS Feed pensei que poderia formata-lo para evitar ver a tradução
            até terminasse de ler o original e tentar entender o maximo possível
            antes de ler a tradução, por isso pensei em poder habilitar a
            tradução aos poucos, por linha.{" "}
          </p>
        </section>

        <hr />

        <section>
          <h4>Desafios</h4>

          <img
            className={classes.imgs}
            src={projectImgSrc2}
            alt="Imagem do site, visão geral"
          />

          <p>
            Não havia ainda tido oportunidade de trabalhar com dados em XML, que
            é formato que o RSS Feed é fornecido. Então foi um processo de
            pesquisa para entender como formatar e realizar esse processo de
            modo correto no framework que usei (React).
          </p>
        </section>

        <hr />

        <section>
          <h4>Aprendizados</h4>

          <p>
            Manter o layout funcionado corretamente para dispositivo menores foi
            interessante, pois faz um tempo que tenho trabalhado com aplicações
            desktop então foi bom relembrar toda essa parte de responsividade.
          </p>
        </section>
      </div>

      <aside>
        <img
          className={classes.imgs}
          src={projectImgSrc3}
          alt="Imagem do site, visão geral"
        />

        <section>
          <h4>links</h4>
          <ul>
            <li>
              <a
                tabIndex={!closeHeader ? -1 : 0}
                href="https://esteves-esta.github.io/humans-of-seoul-feed-format/"
                target="_blank"
              >
                site
              </a>
            </li>
            <li>
              <a
                tabIndex={!closeHeader ? -1 : 0}
                href="https://github.com/esteves-esta/humans-of-seoul-feed-format"
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
            <li>Typescript</li>
            <li>SWR</li>
            <li>RadixUI Unstyled</li>
            <li>Lucide React</li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

export default ProjectHumansOfSeoul;
