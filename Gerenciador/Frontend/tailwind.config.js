export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      sm:'350px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
      '2xl':'1563px',
    },
    extend: {
      boxShadow:{
        cyanShadow: '0px 0px 20px 0px RGBA(0, 0, 0, 0.2)',
        cyanMediumShadow:'10px 10px 200px 150px  rgba(94, 206, 220, 0.5)',
        orangeMediumShadow:'10px 10px 200px 150px rgba(240, 169, 79, 0.5) '
      },
      colors: {
        black: "#1e1917",
        white: "#edf0f5",
        white2:"#ffffff",
        grey: "#626965",
        lightGrey: "#978580",
        darkGrey: "#3f4441", 
        Blue:"#3750eb",
        LightBlue:"#c5d4fd",
        DarkBlue:"#352ee8",

      },
      fontFamily: {
        body: ["Josefin Sans"],
        special: ["Roboto"],
        montserrat:["Montserrat"]
      },
    },
  },
  plugins: [],
};