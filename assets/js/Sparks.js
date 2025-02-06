const SparkStyle = `
span {
  color: var(--color-orange-2);
  font-style: italic;
}
@font-face {
  font-family: og-emoji;
  src: url(../fonts/og-dcm-emoji.ttf);
}

.emoji {
  font-family: og-emoji, sans-serif;
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
      <span class='emoji'>✨</span>
      <slot name="text"></slot>
      <span class='emoji'>✨</span>
    </span>`;
  }


}

customElements.define("spark-text", Sparks);
