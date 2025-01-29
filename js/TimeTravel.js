// https://developer.mozilla.org/pt-BR/docs/Web/API/Web_components/Using_custom_elements

const pages = [
  { link: "/", name: "index" },
  { link: "./pages.html", name: "oldweb" },
  { link: "./teste.html", name: "teste" }
  // { link: "/pages/noughties", name: "noughties" },
  // { link: "/pages/future-experimentation", name: "future-experimentation" }
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
