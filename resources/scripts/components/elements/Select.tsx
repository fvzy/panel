import styled, { css } from 'styled-components';
import tw, { theme } from 'twin.macro';

interface Props {
    hideDropdownArrow?: boolean;
}

const dark = () => document.documentElement.classList.contains('dark');

const Select = styled.select<Props>`
    ${tw`shadow-none block p-3 pr-8 rounded border w-full text-sm transition-colors duration-150 ease-linear`};

    &,
    &:hover:not(:disabled),
    &:focus {
        ${tw`outline-none`};
    }

    -webkit-appearance: none;
    -moz-appearance: none;
    background-size: 1rem;
    background-repeat: no-repeat;
    background-position-x: calc(100% - 0.75rem);
    background-position-y: center;

    &::-ms-expand {
        display: none;
    }

    ${(props) =>
        !props.hideDropdownArrow &&
        css`
            ${tw`bg-zinc-300 border-zinc-500 text-zinc-800 dark:(bg-zinc-700 text-zinc-200)`};
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='${encodeURIComponent(
                dark() ? theme`colors.gray.200` : theme`colors.gray.700`
            )}' d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'/%3e%3c/svg%3e ");

            &:hover:not(:disabled),
            &:focus {
                ${tw`border-zinc-600 dark:border-zinc-400`};
            }
        `};
`;

export default Select;
