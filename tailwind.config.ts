import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{

        // PRIMARY COLORS
        appOrange: '#FF5252',
        appGrey: '#292828',
        appPear:'#D7DF22',
        appWood: '#F9F5F1',
        appJellyfish: '#52C4D4',
        appBlue: '#0084ff',
        teleBlue: '#0088CC',
        teleBlueHover: '#0073ad',
        appBlueHover: '#0071db',
        appOrangeHover: '#dc3d3d',


        // SECONDARY  COLORS
        // backgrounds
        pryBg: '#fff',
        secBg: '#f4f4f4',
        tertBg: '#f5feff',
        athensGray: '#f6f7f9',

        // typography
        textBody: '#232323',
        textSec: '#636363',
        textInactive: '#cccc3b',
        textSoftRed: '#ea6a6a',
        disabled: '#979797',

        // diagram text
        diaPry: '#47c3c6',
        diaJellyDeep: '#37b2bc',
        diaJellySoft: '#6bddda',
        diaSoftPink: '#f29191',
        diaYellow: '#e2de59',

        // buttons
        pryBtn: '#ff5252',
        secBtn: '#F9F5F1',
        hoverGreyBtn: '#292828',
        disabledRedBtn: '#e2dd2b',
        errorBtn: '#e02d2d',
        errorDisabledBtn: '#dd9b9b',
        darkBtn: '#000',
        darkGreyBtn: '#191919',
        yellowBtn: "#41c084",
        btnBorder: "#e1e5ea",

        
        // borders
        pryBorder: '#8e8e8e',
        secBorder: '#ddd',
        warningBorder: '#dddd64',
        defaultInputBorder : '#eaeaea',
        selectedInputBorder: '#b2b2b2',
        focusInputBorder: '#ff3e3e',
        errorInputBorder: '#fc6565',
        lightBlueBorder: '#92e5ff',

        // notifications
        noteSuccess: '#42c684',
        noteWarning: '#ff8080',
        noteError: '#ed3e3e',
        notePromo: '#1d9099',

        // links
        linkMain: '#3399ff',
        linkHover:  '#2684d1',
        linkGreen: '#86e0b1',


        // input fields
        inputBg: '#fff',
        disabledInputBg: '#f4f4f4',


        // labels
        lightBlueLabel: '#c0f3ff',
        manyComet: '#5A677D',
        mintGreenLabel: '#b6f2d1',
        lightMintLabel: '#e8f9f0',
        brightYellowLabel:'#c9c945',


        // diagram bg
        diaBgLeft: '#c4e0fc',
        diaBgMid: '#daeefd',
        diaBgRight: 'edfbfd',


        // other 
        otherYellow: '#e5e577',
        otherJellyDeep: '#37b2bc',
        otherBlue: '#00ccff',
        otherBlueSea: '#9DEFE1',
        otherLightPink: '#f2a0a0',
        otherGovBay: '#3B42C4',






        // alerts
        alertSuccess: '#42c684',
        alertInfo: "#3399ff",
        alertWarning: '#ff8080',
        alertError: '#ed3e3e',

        // shadow: '#a7d1d3'
        shadow: '#8492A6'
        
      },
      fontSize:{
        // HEADINGS
        head1: '44px',
        head2: '32px',
        head3: '24px',
        head4: '20px',
        head5: '17px',
        head6: '16px',

        // BODY
        bodyLarge: '22px',
        bodyNormal: '16px',
        bodySmall: '13px',

        // ELEMENTS

        tab:'24px',
        tabSmall: '20px',
        labels: '16px',
        button: '16px',
        buttonCaps: '13px',
        nav: '15px',
        navSmall: '13px',
        links: '15px',
        linkSmall: '13px',

      },
      fontFamily: {
        clash: ['var(--font-clash)'],
      },
    },
  },
  plugins: [],
};
export default config;
