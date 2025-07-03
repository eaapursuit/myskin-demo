// tailwind.config.js (ES Modules clean version)
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  safelist: [
    
    "text-neutral",
    "text-light",
    
    {
      pattern:
        /(m|p)(t|b|l|r)-(0|px|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        lightgray: "#F8F6F6",
        cream: "#FCE4D8",
        tan: "#A68671",
        sage: "#B2B379",
        chocolate: "#472816",
        caramel: "#E4C6B4",
        charcoal: "#0A0A06",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        headline: ["Sentient", "sans-serif"],
        subheadline: ["Sentient", "sans-serif"],
      },
      fontWeight: {
        medium: 500,
        regular: 400,
      },
      boxShadow: {
        header: "0px 2px 8px rgba(27, 32, 50, .08)",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridColumnStart: {
        span4: "span 4",
      },
      gridColumnEnd: {
        neg3: "-3",
        span4: "span 4",
      },
      maxWidth: {
        sectionBody: "846px",
      },
      padding: {
        "2/3": "66.666%",
        "3/4": "75%",
        "9/16": "56.25%",
      },
      screens: {
        xxs: '320px',
        xs: "375px",
      },
      width: {
        formField: "calc(50% - 1rem)",
      },
    },
  },
  plugins: [],
};
