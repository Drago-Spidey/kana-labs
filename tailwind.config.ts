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
