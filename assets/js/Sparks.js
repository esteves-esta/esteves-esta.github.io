const SparkStyle = `
span {
  color: var(--color-orange-2);
  font-style: italic;
}
`;
// https://creativecommons.org/share-your-work/cclicenses/
class Sparks extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    const template = document.createElement("custom-span");
    this.shadow.appendChild(template);

    this.shadow.innerHTML = `
    <style>${SparkStyle}</style>
    <span>
        &#127878; <slot name="username"></slot> &#127879;
    </span>`;
  }


}

customElements.define("spark-text", Sparks);
