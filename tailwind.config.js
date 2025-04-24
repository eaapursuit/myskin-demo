// tailwind.config.js (ES Modules clean version)
export default {
  content: [ "./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
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
        light: "#f8f9fa",
        dark: "#212529",
        neutral: "#6c757d",
        neutralAlt: "#adb5bd",
        primary: "#0d6efd",
        theme1: {
            background: '#FFFFFF',
            primary: 'f8e55da',
            accent: '#a98d7f',
            highlight: '#b2b379',
            dark: '#422919'
        },
        theme2: {
            background: '#f8e55da',
            primary: '#b2b379',
            accent: '#7d6b5e',
            highlight: '#422919',
            dark: '#1c1b18'
        },
        theme3: {
            background: '#E8E8Eb',
            primary: '#DCDCDC',
            accent: '#b2b379',
            highlight: '#a98d7f',
            dark: '#422919'
        },
        theme4: {
            background: '#b2b379',
            primary: '#E8E8Eb',
            accent: '#f8e55da',
            highlight: '#7d6b5e',
            dark: '#1c1b18'
        },
        theme5: {
            background: '#422919',
            primary: '#f8e55da',
            accent: '#b2b379',
            highlight: '#E8E8Eb',
            dark: '#000000'
        }
      },
      fontFamily: {
        sans: ["Plus Jakarta", "sans-serif"],
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
        xs: "480px",
      },
      width: {
        formField: "calc(50% - 1rem)",
      },
    },
  },
  plugins: [],
};
