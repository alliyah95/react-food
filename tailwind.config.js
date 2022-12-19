/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js, jsx}"],
    theme: {
        fontFamily: {
            decorated: "Signika",
            sans: "Inter",
        },
        extend: {
            colors: {
                primary: "#87796F",
                "primary-dark": "#73665d",
                secondary: "#D6DF58",
                "secondary-dark": "#c6cf4e",
                tertiary: "#ED6E7A",
                "tertiary-dark": "#db6772",
                gray: "#F6F6F6",
            },
            animation: {
                "bounce-slow": "bounce 1s ",
            },
        },
    },
    plugins: [],
};
