// https://creativecommons.org/share-your-work/cclicenses/
class Footer extends HTMLElement {
  constructor() {
    super();
    // this.shadow = this.attachShadow({ mode: "open" });

    // const template = document.createElement("custom-footer");
    // this.shadow.appendChild(template);

    this.innerHTML = `
    <style>
    footer {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    .credits a {
      font-family: inherit;
      color: inherit;
      text-decoration: none;
    }
    </style>
    <footer>
    <div class="rights">
        <small>
          © Copyright <span id="year">2025</span>-now by esteves-esta. <strong>All Rights Reserved.</strong>
        </small>

        <small>
          Made <em>the old way</em> with no framework. 
          <spark-text>
            <b slot="text"> 100% human made</b>
          </spark-text>
        </small>
      </div>
      <div class="credits">
       <p><strong>credits</strong></p>
        <small>
          <span class='emoji'>↖</span>
          <a slot="credits" target="_blank" href="https://meowni.ca/posts/og-emoji-font/">emoji font by meowni</a>
        </small>
        <br />
        <br />
          <a target="_blank" href="https://notbyai.fyi/">
            <img height="35" src="assets/Not-By-AI/en/developed/black.svg"/>
          </a>
      </div>
    </footer>`;
  }
}
// https://css-tricks.com/styling-a-web-component/
customElements.define("footer-all-rights-reserved", Footer);
