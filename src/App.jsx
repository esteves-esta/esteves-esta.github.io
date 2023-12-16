function App() {
  return (
    <main>
      <svg
        className="sun"
        width="706"
        height="676"
        viewBox="0 0 706 676"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_8_276)">
          <g filter="url(#filter0_f_8_276)">
            <circle
              cx="353"
              cy="282"
              r="75"
              fill="#EC8236"
              fillOpacity="0.49"
            />
          </g>
          <g filter="url(#filter1_ddf_8_276)">
            <circle
              cx="353"
              cy="282"
              r="42.5725"
              fill="url(#paint0_radial_8_276)"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_8_276"
            x="-422"
            y="-493"
            width="1550"
            height="1550"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="350"
              result="effect1_foregroundBlur_8_276"
            />
          </filter>
          <filter
            id="filter1_ddf_8_276"
            x="-17.5725"
            y="20.4275"
            width="683.145"
            height="683.145"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="50"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow_8_276"
            />
            <feOffset dx="-29" dy="80" />
            <feGaussianBlur stdDeviation="124.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.901961 0 0 0 0 0.439216 0 0 0 0 0.25098 0 0 0 0.8 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_8_276"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="15"
              operator="dilate"
              in="SourceAlpha"
              result="effect2_dropShadow_8_276"
            />
            <feOffset dy="13" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.833333 0 0 0 0 0.417708 0 0 0 0 0.239583 0 0 0 0.22 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_8_276"
              result="effect2_dropShadow_8_276"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_8_276"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="2.5"
              result="effect3_foregroundBlur_8_276"
            />
          </filter>
          <radialGradient
            id="paint0_radial_8_276"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(344.485 253.264) rotate(40.8919) scale(67.5802)"
          >
            <stop stopColor="#DB6D39" />
            <stop offset="0.530494" stopColor="#EA8135" />
            <stop offset="0.854167" stopColor="#E68858" />
            <stop offset="1" stopColor="#F29A77" />
          </radialGradient>
          <clipPath id="clip0_8_276">
            <rect width="706" height="676" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div>
        <h1 className="title1">criando uma nova versão </h1>
        <h1 className="title2">para um novo ano</h1>
      </div>

      <h2>esteves-esta</h2>
    </main>
  );
}

export default App;
