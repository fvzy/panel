import React, { forwardRef } from 'react';
import { Form } from 'formik';
import styled from 'styled-components';
import FlashMessageRender from '@/components/FlashMessageRender';
import tw from 'twin.macro';
import { useStoreState } from 'easy-peasy';
import { ApplicationStore } from '@/state';

type Props = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
    title?: string;
};

const Container = styled.div`
    ${tw`mx-auto p-4 md:p-10 w-full`};
    max-width: 600px;
`;

export default forwardRef<HTMLFormElement, Props>(({ title, ...props }, ref) => (
    <Container>
        <h1 css={tw`text-5xl text-center font-medium py-4 flex flex-wrap justify-center items-center gap-4`}>
            <img src={useStoreState((state: ApplicationStore) => state.settings.data!.logo)} css={tw`w-[2em]`} />
            {useStoreState((state: ApplicationStore) => state.settings.data!.name)}
        </h1>
        {title && <h2 css={tw`text-3xl text-center text-zinc-700 dark:text-zinc-100 font-medium py-4`}>{title}</h2>}
        <FlashMessageRender css={tw`mb-2 px-1`} />
        <Form {...props} ref={ref}>
            <div
                css={tw`md:flex w-full bg-white border border-zinc-300 dark:(bg-zinc-800 border-zinc-700) shadow-lg rounded-lg p-6 mx-1`}
            >
                <div css={tw`flex-1`}>{props.children}</div>
            </div>
        </Form>
        <p css={tw`text-center text-zinc-600 dark:text-zinc-500 text-xs mt-4`}>
            &copy; 2015 - {new Date().getFullYear()}&nbsp;
            <a
                rel={'noopener nofollow noreferrer'}
                href={'https://pterodactyl.io'}
                target={'_blank'}
                css={tw`no-underline text-zinc-600 hover:text-zinc-900 dark:(text-zinc-500 hover:text-zinc-300)`}
            >
                Pterodactyl Software
            </a>
        </p>
    </Container>
));
