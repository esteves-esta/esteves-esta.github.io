// https://developer.mozilla.org/pt-BR/docs/Web/API/Web_components/Using_custom_elements

const pages = [
  { link: "1994.html", name: "1994" },
  { link: "1997.html", name: "1997" },
  { link: "2006.html", name: "2006" },
  { link: "2015.html", name: "2015" },
  { link: "2020.html", name: "2020" },
  { link: "index.html", name: "2025" },
  { link: "2030.html", name: "2030" },
];

/* TODO - jump to content - a11y */

const style = `
nav {
  height: 100%;
  padding: 0px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 990ms ease-in;
  color: palegoldenrod;
  font-family: Arial, 'sans-serif';
  span {
    font-family: "Fraunces", serif;
  }
  .links {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  a {
    color: palegoldenrod;
    padding: 5px;
    text-underline-offset: 2.5px;
  }
  a:hover {
    background-color: #444;
  }
  a.selected {
    color: white !important;
    font-weight: bold;
    background-color: #222;
  }
}

`;

class Teste extends HTMLElement {
  constructor() {
    super();
    this.name = "";
    this.path = "";
    this.shadow = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    this.shadow.appendChild(template);
  }

  connectedCallback() {
    const links = pages.map(({ link, name }) => {
      return `<a class="${
        this.name === name ? "selected" : ""
        }" href="${this.path ? this.path : ''}${link}">${name}</a>`;
    });
    console;
    this.shadow.innerHTML = `
    <style>${style}</style>

    <nav>
      <span>time travel throught the web</span>
      <div class="links">
        ${links.join(" ")}
      </div>
    </nav>`;
  }

  static get observedAttributes() {
    return ["name", "path"];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }
}

customElements.define("time-travel", Teste);
