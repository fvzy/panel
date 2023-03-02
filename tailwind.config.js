const colors = require('tailwindcss/colors');

const gray = {
    50: 'var(--plugin-compat-neutral-50)',
    100: 'var(--plugin-compat-neutral-100)',
    200: 'var(--plugin-compat-neutral-200)',
    300: 'var(--plugin-compat-neutral-300)',
    400: 'var(--plugin-compat-neutral-400)',
    500: 'var(--plugin-compat-neutral-500)',
    600: 'var(--plugin-compat-neutral-600)',
    700: 'var(--plugin-compat-neutral-700)',
    800: 'var(--plugin-compat-neutral-800)',
    900: 'var(--plugin-compat-neutral-900)',
};

module.exports = {
    content: [
        './resources/scripts/**/*.{js,ts,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: [ 'Rubik', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', '"Roboto"', 'system-ui', 'sans-serif' ],
                header: [ '"IBM Plex Sans"', '"Roboto"', 'system-ui', 'sans-serif' ],
                mono: [ 'Menlo', 'Monaco', 'Consolas', 'monospace' ],
            },
            colors: {
                black: '#131a20',
                // "primary" and "neutral" are deprecated, prefer the use of "blue" and "gray"
                // in new code.
                primary: colors.blue,
                gray: gray,
                neutral: gray,
                cyan: colors.cyan,
                zinc: colors.zinc,
                customColors: {
                    buttonBackground: 'var(--button-background)',
                    buttonHoverBackground: 'var(--button-hover-background)',
                    buttonBorder: 'var(--button-border)',
                    buttonHoverBorder: 'var(--button-hover-border)',
                }
            },
            fontSize: {
                '2xs': '0.625rem',
            },
            transitionDuration: {
                250: '250ms',
            },
            borderColor: theme => ({
                default: theme('colors.gray.400', 'currentColor'),
            }),
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ]
};
