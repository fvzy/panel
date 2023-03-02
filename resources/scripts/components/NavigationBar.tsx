import * as React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useStoreState } from 'easy-peasy';
import { ApplicationStore } from '@/state';
import SearchContainer from '@/components/dashboard/search/SearchContainer';
import tw, { theme } from 'twin.macro';
import styled from 'styled-components';
import http from '@/api/http';
import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
import { CogIcon, LogoutIcon, MoonIcon, SunIcon } from '@heroicons/react/solid';
import Avatar from '@/components/Avatar';

const Navigation = styled.div`
    ${tw`sticky top-0 w-full bg-zinc-200 dark:bg-zinc-800 shadow-md overflow-x-auto z-50`};

    & > div {
        ${tw`w-full flex items-center justify-between`};
    }

    & #logo {
        & > a {
            ${tw`text-2xl font-header px-4 no-underline text-zinc-600 hover:text-zinc-900 dark:(text-zinc-300 hover:text-zinc-100)
            transition-colors duration-150 flex items-center justify-start`};

            & > span {
                ${tw`hidden md:(inline ml-3)`};
            }

            & > img {
                ${tw`h-[1.75em] inline-block`};
            }
        }
    }
`;

const RightNavigation = styled.div`
    ${tw`flex h-full items-center justify-center`};

    & > a,
    & > button,
    & > .navigation-link {
        ${tw`flex items-center h-full no-underline text-zinc-600 dark:text-zinc-300 px-6 cursor-pointer transition-all duration-150`};

        &:hover {
            ${tw`text-zinc-900 bg-zinc-300 dark:(text-zinc-100 bg-zinc-700)`};
        }

        &.active {
            ${tw`text-zinc-900 bg-zinc-200 dark:(text-zinc-100 bg-zinc-800)`};
            box-shadow: inset 0 2px ${theme`colors.blue.600`.toString()};
            background-image: linear-gradient(to bottom, ${theme`colors.blue.600`.toString()}40, transparent);
        }
    }
`;

export default () => {
    const name = useStoreState((state: ApplicationStore) => state.settings.data!.name);
    const logo = useStoreState((state: ApplicationStore) => state.settings.data!.logo);
    const user = useStoreState((state: ApplicationStore) => state.user.data);
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [dark, setDark] = useState(document.documentElement.classList.contains('dark'));

    const onTriggerLogout = () => {
        setIsLoggingOut(true);
        http.post('/auth/logout').finally(() => {
            // @ts-expect-error this is valid
            window.location = '/';
        });
    };

    const onTriggerDarkModeChange = () => {
        const newDark = !dark;
        setDark(newDark);
        localStorage.theme = newDark ? 'dark' : 'light';
        if (newDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        window.dispatchEvent(new CustomEvent('omame:theme_update', { detail: newDark }));
    };

    return (
        <Navigation>
            <SpinnerOverlay visible={isLoggingOut} />
            <div css={tw`mx-auto w-full flex items-center h-14`}>
                <div id={'logo'}>
                    <Link to={'/'}>
                        <img src={logo} alt={`${name}'s logo`} />
                        <span>{name}</span>
                    </Link>
                </div>
                <RightNavigation>
                    <SearchContainer />
                    <button onClick={onTriggerDarkModeChange}>
                        {dark ? <SunIcon css={tw`w-5 h-5`} /> : <MoonIcon css={tw`w-5 h-5`} />}
                    </button>
                    <NavLink to={'/account'}>
                        <span className={'flex items-center w-6 h-6 mr-2'}>
                            <Avatar.User />
                        </span>
                        <span css={tw`hidden lg:inline`}>
                            {user!.nameFirst} {user!.nameLast}
                        </span>
                    </NavLink>
                    {user!.rootAdmin && (
                        <a href={'/admin'} rel={'noreferrer'}>
                            <CogIcon css={tw`w-5 h-5`} />
                        </a>
                    )}
                    <button onClick={onTriggerLogout}>
                        <LogoutIcon css={tw`w-5 h-5`} />
                    </button>
                </RightNavigation>
            </div>
        </Navigation>
    );
};
