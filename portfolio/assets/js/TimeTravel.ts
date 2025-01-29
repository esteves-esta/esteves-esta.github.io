const template = document.createElement("template");
template.innerHTML = `
<nav>
  <span>time travel throught the web</span>
  <div>
    <a href="/">index</a>
    <a href="/pages/">oldweb</a>
    <a href="/pages/teste/">teste</a>
  </div>
</nav>
`;

class TimeTravel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = `
      @import "/assets/styles/teste.css";
    `;
    this.shadowRoot?.append(style, template.content.cloneNode(true));
  }
}

customElements.define("time-travel-nav", TimeTravel);
