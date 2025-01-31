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

const style = `
nav {
  display: flex;
  justify-content: space-between;
  color: palegoldenrod;
  width: 100%;
  transition: all 990ms ease-in;
  a {
    color: palegoldenrod;
  }
  a.selected {
    color: red !important;
    font-weight: bold;
  }
}

`;

class Teste extends HTMLElement {
  constructor() {
    super();
    this.name = "";
    this.shadow = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    this.shadow.appendChild(template);
  }

  connectedCallback() {
    const links = pages.map(({ link, name }) => {
      return `<a class="${
        this.name === name ? "selected" : ""
      }" href="${link}">${name}</a>`;
    });
    console;
    this.shadow.innerHTML = `
    <style>${style}</style>

    <nav>
      <span>time travel throught the web</span>
      <div>
        ${links.join(" ")}
      </div>
    </nav>`;
  }

  static get observedAttributes() {
    return ["name"];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }
}

customElements.define("time-travel", Teste);
