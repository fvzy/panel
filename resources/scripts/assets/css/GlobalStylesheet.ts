import tw, { theme } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        ${tw`font-sans bg-white text-black dark:(bg-zinc-900 text-white)`};
        letter-spacing: 0.015em;
    }

    h1, h2, h3, h4, h5, h6 {
        ${tw`font-medium tracking-normal font-header`};
    }

    p {
        ${tw`text-zinc-800 dark:text-zinc-200 leading-snug font-sans`};
    }

    form {
        ${tw`m-0`};
    }

    textarea, select, input, button, button:focus, button:focus-visible {
        ${tw`outline-none`};
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield !important;
    }

    /* Scroll Bar Style */
    ::-webkit-scrollbar {
        background: none;
        width: 16px;
        height: 16px;
    }

    ::-webkit-scrollbar-thumb {
        border: solid 0 rgb(0 0 0 / 0%);
        border-right-width: 4px;
        border-left-width: 4px;
        -webkit-border-radius: 9px 4px;
        -webkit-box-shadow: inset 0 0 0 1px ${theme`colors.zinc.500`.toString()}, inset 0 0 0 4px ${theme`colors.zinc.300`.toString()};
    }

    .dark *::-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 0 1px ${theme`colors.zinc.500`.toString()}, inset 0 0 0 4px ${theme`colors.zinc.700`.toString()} !important;
    }

    ::-webkit-scrollbar-track-piece {
        margin: 4px 0;
    }

    ::-webkit-scrollbar-thumb:horizontal {
        border-right-width: 0;
        border-left-width: 0;
        border-top-width: 4px;
        border-bottom-width: 4px;
        -webkit-border-radius: 4px 9px;
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }

    // plugin compatibility layer
    html {
        --plugin-compat-neutral-50: ${theme`colors.zinc.900`.toString()};
        --plugin-compat-neutral-100: ${theme`colors.zinc.900`.toString()};
        --plugin-compat-neutral-200: ${theme`colors.zinc.800`.toString()};
        --plugin-compat-neutral-300: ${theme`colors.zinc.700`.toString()};
        --plugin-compat-neutral-400: ${theme`colors.zinc.600`.toString()};
        --plugin-compat-neutral-500: ${theme`colors.zinc.500`.toString()};
        --plugin-compat-neutral-600: ${theme`colors.zinc.400`.toString()};
        --plugin-compat-neutral-700: ${theme`colors.zinc.300`.toString()};
        --plugin-compat-neutral-800: ${theme`colors.zinc.200`.toString()};
        --plugin-compat-neutral-900: ${theme`colors.zinc.100`.toString()};
    }

    html.dark {
        --plugin-compat-neutral-50: ${theme`colors.zinc.50`.toString()};
        --plugin-compat-neutral-100: ${theme`colors.zinc.100`.toString()};
        --plugin-compat-neutral-200: ${theme`colors.zinc.200`.toString()};
        --plugin-compat-neutral-300: ${theme`colors.zinc.300`.toString()};
        --plugin-compat-neutral-400: ${theme`colors.zinc.400`.toString()};
        --plugin-compat-neutral-500: ${theme`colors.zinc.500`.toString()};
        --plugin-compat-neutral-600: ${theme`colors.zinc.600`.toString()};
        --plugin-compat-neutral-700: ${theme`colors.zinc.700`.toString()};
        --plugin-compat-neutral-800: ${theme`colors.zinc.800`.toString()};
        --plugin-compat-neutral-900: ${theme`colors.zinc.900`.toString()};
    }
`;
