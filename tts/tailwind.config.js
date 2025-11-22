/** @type {import('tailwindcss').Config} */
export const content = [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
    extend: {
        colors: {
            "primary-col": "#01113F",
            "light-blue":"#DDE4FF"
        }
    },
    fontFamily: {
        haas: ['"Neue Haas Grotesk Display Pro"', "sans-serif"],
        urbanist: ["var(--font-urbanist)"],
      },
};
export const plugins = [];