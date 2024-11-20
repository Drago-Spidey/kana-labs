import type { Config } from "tailwindcss";

const plugin = require('tailwindcss/plugin');

const config: Config = {


  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        klTbBg: "#111213",
        klBtnBg: "#1D1E20",
        klFC: "#A5A5A6",
        klc : "#2ED3B7",
        klbg: "#17181A",
        klb: "#0C0C0D",
        kle: "#111213",
        klt: "#111213",
        klFD: "#777879",
        klfg: "#12B76A",
        teal: {
          25: '#F6FEFC',
          50: '#F0FDF9',
          100: '#CCFBEF',
          200: '#99F6E0',
          300: '#5FE9D0',
          400: '#2ED3B7',
          500: '#15B79E', // primary teal color
          600: '#0E9384',
          700: '#107569',
          800: '#125D56',
          900: '#134E48',
        },
        cyan: {
          25: '#F5FEFF',
          50: '#ECFDFF',
          100: '#CFF9FE',
          200: '#A5F0FC',
          300: '#67E3F9',
          400: '#22CCEE',
          500: '#06AED4', // primary cyan color
          600: '#088AB2',
          700: '#0E7090',
          800: '#155B75',
          900: '#164C63',
        },
        blue: {
          25: '#F5FAFF',
          50: '#EFF8FF',
          100: '#D1E9FF',
          200: '#B2DDFF',
          300: '#84CAFF',
          400: '#53B1FD',
          500: '#2E90FA', // primary blue color
          600: '#1570EF',
          700: '#175CD3',
          800: '#1849A9',
          900: '#194185',
        },
        gray: {
          25: '#FCFCFD',
          50: '#F8FAFC',
          100: '#EEF2F6',
          200: '#E3E8EF',
          300: '#CDD5DF',
          400: '#9AA4B2',
          500: '#697586', // primary gray color
          600: '#4B5565',
          700: '#364152',
          800: '#202939',
          900: '#121926',
        },
        darkGray: {
          25: '#D2D2D2',
          50: '#BBBBBC',
          100: '#A5A5A6',
          200: '#777879',
          300: '#4A4B4D',
          400: '#1D1E20',
          500: '#17181A', // primary dark gray color
          600: '#4B5565',
          700: '#364152',
          800: '#202939',
          900: '#121926',
        },
        red: {
          25: '#FFFBFA',
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04438', // primary red color
          600: '#D92D20',
          700: '#B42318',
          800: '#912018',
          900: '#7A271A',
        },
        orange: {
          25: '#FFFCF5',
          50: '#FFFAEB',
          100: '#FEF0C7',
          200: '#FEDF89',
          300: '#FEC84B',
          400: '#FDB022',
          500: '#F79009', // primary orange color
          600: '#DC6803',
          700: '#B54708',
          800: '#93370D',
          900: '#7A2E0E',
        },
        green: {
          25: '#F6FEF9',
          50: '#ECFDF3',
          100: '#D1FADF',
          200: '#A6F4C5',
          300: '#6CE9A6',
          400: '#32D583',
          500: '#12B76A', // primary green color
          600: '#039855',
          700: '#027A48',
          800: '#05603A',
          900: '#054F31',
        },
        klblack: {
          25: '#1B1D1E',
          50: '#1A1C1C',
          100: '#171819',
          200: '#151616',
          300: '#121213',
          400: '#0E0E0F',
          500: '#0C0C0D', // primary black color
          600: '#09090A',
          700: '#060606',
          800: '#030304',
          900: '#000000',
        },
        klwhite: {
          25: '#2A2C2D',
          50: '#333535',
          100: '#4A4B4C',
          200: '#616162',
          300: '#787879',
          400: '#8E8E8F',
          500: '#A5A5A6', // primary gray color
          600: '#BBBBBB',
          700: '#D2D2D2',
          800: '#E8E8E8',
          850: '#FCFDFE',
          900: '#FFFFFF',
        },
        
      },
      boxShadow: {
        custom1: '0px 10px 8px 0px #00FFFF1A',
        custom2: '0px 4px 8px 0px #00000026',
        custom3: '0px 5px 0px 0px #0E9384',
        customCombined: '0px 10px 8px 0px #00FFFF1A, 0px 4px 8px 0px #00000026, 0px 5px 0px 0px #0E9384',
        customH: '0px 10px 8px 0px #00FFFF1A, 0px 4px 8px 0px #00000026, 0px 7px 0px 0px #0E9384',
        customA: '0px 10px 8px 0px #00FFFF1A, 0px 4px 8px 0px #00000026, 0px 3px 0px 0px #0E9384',

      },
      fontSize: {
       
        'xss': '10px', // Example of custom size
    },
  },
  },
    plugins: [
      plugin(function({ addUtilities }: { addUtilities: (utilities: Record<string, string | object>) => void }) {
        // Ensure addUtilities is typed properly
        addUtilities({
          '.no-scrollbar': {
            /* Hide scrollbar for webkit browsers (Chrome, Safari) */
            '-webkit-overflow-scrolling': 'touch',
            'scrollbar-width': 'none', /* Firefox */
            '&::-webkit-scrollbar': {
              display: 'none', /* Chrome, Safari, Opera */
            },
          },
        });
      }),
    ],  
};
export default config;
