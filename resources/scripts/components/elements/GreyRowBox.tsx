import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.div<{ $hoverable?: boolean }>`
    ${tw`flex rounded no-underline text-zinc-800 items-center bg-zinc-200 p-4 border border-zinc-400
    transition-colors duration-150 overflow-hidden shadow-lg
    dark:(text-zinc-200 bg-zinc-800 border-zinc-600)`};

    ${(props) => props.$hoverable !== false && tw`hover:(border-zinc-600 dark:border-zinc-200)`};

    & .icon {
        ${tw`rounded-full w-16 flex items-center justify-center bg-zinc-300 border border-zinc-500 dark:bg-zinc-700 p-3`};
    }
`;
