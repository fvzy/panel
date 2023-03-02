import React, { memo } from 'react';
import tw from 'twin.macro';
import isEqual from 'react-fast-compare';
import styled from 'styled-components';

interface Props {
    icon?: React.ReactNode;
    title: string | React.ReactNode;
    className?: string;
    children: React.ReactNode;
}

const IconContainer = styled.span`
    & > svg {
        ${tw`inline-block w-5 h-5 mr-2 text-zinc-800 dark:text-zinc-200 vertical-align[sub]`};
    }
`;

const TitledGreyBox = (props: Props) => (
    <div
        css={tw`rounded shadow-md bg-zinc-200 border border-zinc-400 dark:(bg-zinc-700 border-zinc-500) flex flex-col`}
        className={props.className}
    >
        <div css={tw`bg-zinc-300 border-b border-zinc-500 dark:(bg-zinc-800 border-zinc-600) rounded-t p-3`}>
            {typeof props.title === 'string' ? (
                <p css={tw`text-sm uppercase`}>
                    {props.icon && <IconContainer>{props.icon}</IconContainer>}
                    {props.title}
                </p>
            ) : (
                props.title
            )}
        </div>
        <div css={tw`flex-col h-full p-3`}>{props.children}</div>
    </div>
);

export default memo(TitledGreyBox, isEqual);
