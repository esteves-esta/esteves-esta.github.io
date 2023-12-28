// import React from 'react';
import classes from "./styles.module.css";
import projectImgSrc from "../../assets/women-bands/projectWomenBands.png";

function ProjectWomenBands({ closeHeader }) {
  return (
    <div className={`content ${classes.projectContent}`}>
      <div>
        <section>
          <h3>Women fronted metal bands</h3>
          <p className={classes.subtitle}>
            Projeto criado para listar bandas de metal com vocalistas mulheres.
          </p>
        </section>

        <section>
          <h4>Funcionalidades</h4>
          <ul>
            <li>
              Datatable criado do zero;
              <ul>
                <li>Modo grid;</li>
                <li>Filtros e pesquisa por todas ou uma coluna;</li>
                <li>Escolher colunas visíveis;</li>
                <li>Ppaginação e escolha de quantidade de itens por página;</li>
              </ul>
            </li>
            <li>Reprodução de uma preview da band usando a API do Deezer;</li>
            <li>Media Player criado do zero;</li>
            <li>Gráficos para visualizar de forma rápida os dados.</li>
          </ul>
        </section>

        <div className={classes.projectBandTopImg}/>

        <hr />

        <section>
          <h4>Objetivo</h4>

          <p>
            Este projeto surgiu no dia que percebi que todas as bandas de metal
            que conhecia só tinham homems como vocalistas. Comecei a reunir uma
            lista com bandas com vocalistas mulheres e achei que seria
            interessante criar uma aplicação com os dados que estava reunindo.
          </p>

          <p>
            O projeto foi realizado com React pois na época estava estudando
            react com o curso “Joy of React” de Josh Comeau.
          </p>

          <p>
            Já tinha trabalhado com React anteriormente ao curso porém através
            desse curso sanei várias dúvidas e aprendi as novidades da
            tecnologia. Dessa forma resolvi praticar oque fui aprendendo de novo
            neste projeto.
          </p>
        </section>

        <hr />

        <section>
          <h4>Desafios</h4>

          <p>
            No curso “Joy of React” nós estudantes somos instigados após alguns
            módulos a praticar de forma “não guiada”, oque significa praticar
            sem acompanhar um tutorial e criando nossos próprios objetivos.
          </p>
          <p>
            Uma das ideias dada para praticar de forma não guiada era criar um
            componente que geralmente usamos pronto atráves de bibliotecas.
          </p>

          <p>
            No trabalho já usei diversas bibliotecas para criar datatables porém
            não tinha criado até esse momento esse componente do zero, tanto o
            design como a lógica. Criar esse componente realmente me fez ganhar
            uma nova apreciação pelas bibliotecas que uso normalmente para
            realizar essa função ( ^ v ^ ).
          </p>

          <p>
            Devido aos os objetivos que eu me planejei não foi a coisa mais
            rápida ou fácil do mundo o desenvolvimento deste compoente. Sendo
            estes objetivos por exemplos de no uso do compoennte dar a opção de
            ter colunas customizadas para diversos tipos de dado e ao mesmo
            tempo manter a mesma lógica de ordenção e pesquisa para todas as
            colunas
          </p>
        </section>

        <hr />

        <section>
          <h4>Aprendizados</h4>

          <p>
            Realizei a funcionalide de pesquisa no cliente-side porém percebi
            que não seria a melhorar forma pois conforme a lista foi aumentando
            o processo de pesquisa não é tão rápido quanto o desejado.
          </p>

          <p>
            Por isso planejo substituir essa lógica por uma api e colocar os
            dados em um banco não relacional, como o redis.
          </p>
        </section>
      </div>

      <aside>
        <div className={classes.projectBandImg}>
          <img src={projectImgSrc} alt="Imagem do site, visão geral" />
        </div>

        <section>
          <h4>links</h4>
          <ul>
            <li>
              <a
                tabIndex={!closeHeader ? -1 : 0}
                href="https://esteves-esta.github.io/women-fronted-metal-bands/"
                target="_blank"
              >
                site
              </a>
            </li>
            <li>
              <a
                tabIndex={!closeHeader ? -1 : 0}
                href="https://github.com/esteves-esta/women-fronted-metal-bands"
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
            <li>Nivo Charts</li>
            <li>DeezerAPI</li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

export default ProjectWomenBands;
