const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};


// https://developer.mozilla.org/pt-BR/docs/Web/API/Web_components/Using_custom_elements

const pages = [
  { link: "1994.html", name: "1994", color: "--color-teal-3" },
  { link: "1997.html", name: "1997", color: "--color-dull-orange-3" },
  { link: "2006.html", name: "2006", color: "--color-pink-3" },
  { link: "2015.html", name: "2015", color: "--color-orange-3" },
  { link: "2020.html", name: "2020", color: "--color-red-2" },
  { link: "index.html", name: "2025", color: "--color-blue-2" },
  { link: "2030.html", name: "2030", color: "--color-pink-3" },
];

/* TODO - jump to content - a11y */

const style = `
nav {
  user-select: none;
  position: relative;
  height: 100%;
  display: flex;
  
  justify-content: space-between;
  flex-direction: column;
  transition: all 990ms ease-in;
  color: palegoldenrod;
  font-family: Arial, 'sans-serif';
  padding-left: 10px;
  span {
    font-family: "Fraunces", serif;
  }
  .links {
    display: flex;
    align-items: center;
    gap: 15px;
    padding-right: 10px;
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
    background-color: var(--link-color, var(--color-teal-3));
  }
  .teste {
    width: 100%;
    height: 5px;
    position: absolute;
    bottom: 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
    .path {
      width: 1px;
      height: 5px;
      background-color:rgba(255, 255, 255, 0.47);
    }
    .long {
      height: 10px !important;
    }
  }
}

@media (min-width: 650px) {
  nav {
    flex-direction: row;
    align-items: center;
    padding-left: 0px;
  }
  span {
    padding-left: 10px;
  }
}

`;

class TimeTravel extends HTMLElement {
  constructor() {
    super();
    this.name = "";
    this.path = "";
    this.shadow = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    this.shadow.appendChild(template);
  }

  connectedCallback() {
    const links = pages.map(({ link, name, color }) => {
      return `
      <a 
        style="--link-color: var(${color})"
        class="${this.name === name ? "selected" : ""}" 
        href="${this.path ? this.path : ""}${link}"
      >
      ${name}
      </a>`;
    });

    const width = document.body.clientWidth;
    const timeSpikes = width <= 700 ? 50 : 100;

    this.shadow.innerHTML = `
    <style>${style}</style>
    <nav>
      <span>time travel throught the web</span>
      <div class="links">
        ${links.join(" ")}
      </div>
      <div class="teste">
        ${range(timeSpikes)
        .map((i) => {
          return `<div class="path ${i % 2 == 0 ? "long" : ""}"></div>`;
        })
        .join(" ")}
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

customElements.define("time-travel", TimeTravel);
