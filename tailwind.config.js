/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './ui/**/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            textColor: '#111517',
            white: '#fff',
            black: '#000',
            gray: {
                200: '#F0F0F0',
                300: '#111517',
                400: '#D3D3D3',
                500: '#C4C4C4',
                700: '#1B1B1B',
            },
            green: {
                200: '#CBB8A8',
                300: '#9EBC99',
                400: '#4E7850',
                500: '#2D4238',
            },
        },
        extend: {
            transitionDelay: {
                DEFAULT: '300ms',
            },
            msTransitionTimingFunction: {
                DEFAULT: 'easy-in-out',
            },
            zIndex: {
                1: '1',
                2: '2',
                3: '3',
            },
        },
    },
    plugins: [],
};
