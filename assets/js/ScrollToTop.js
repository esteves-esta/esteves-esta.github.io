

class ScrollToTop extends HTMLElement {
  constructor() {
    super();
    // this.shadow = this.attachShadow({ mode: "open" });

    // const template = document.createElement("custom-footer");
    // this.shadow.appendChild(template);

    this.innerHTML = `
    <style>
    button {
     
      --width: 60px;
      color: var(--color-wine-3);
      cursor: pointer;
      border: none;
      background-color: var(--color-teal-2);
      font-size: 1.8rem;
      border-radius: 100%;
      position: fixed;
      overflow: hidden;
      bottom: 20px;
      right: 20px;
      z-index: 1;
      transform: rotate(-45deg);
      @media (hover: hover) and (pointer: fine) {
          &:hover {
            background-color: var(--color-pink);
          }
      }
    }

    button.visible { 
      width: var(--width);
      height: var(--width);
      opacity: 1;
      transition: opacity 600ms ease 300ms, width 300ms ease, height 300ms ease;
    }
      
    button.invisible {
      transition: opacity 300ms ease, width 400ms ease 300ms, height 400ms ease 300ms;
      width: 0;
      height: 0;
      opacity: 0;
    }
    </style>

    <button>
      <span class='emoji'>↗</span>
    </button>`;


    const button = this.querySelector("button");
    button.addEventListener("click", this.handleClick);
  }

  handleClick() {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }

  connectedCallback() {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      const button = this.querySelector("button");
      button.setAttribute('class', entry.isIntersecting ? 'invisible' : 'visible');

    }, options);



    window.addEventListener(
      "load",
      (event) => {
        const nav = document.querySelector("nav");
        observer.observe(nav);
      },
      false,
    );

    window.removeEventListener(
      "unload",
      (event) => {
        observer.disconnect();
      },
      false,
    );
  };

}

// https://css-tricks.com/styling-a-web-component/
customElements.define("scroll-to-top", ScrollToTop);
