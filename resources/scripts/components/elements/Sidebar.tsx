import { ServerIcon } from '@heroicons/react/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import tw, { theme } from 'twin.macro';
import routes from '@/routers/routes';

const StyledSidebar = styled.div`
    ${tw`flex-none sticky top-14 h-[calc(100vh - 3.5rem)] md:w-72 bg-zinc-200 dark:bg-zinc-800 overflow-y-auto py-2`};

    & > h6 {
        ${tw`uppercase text-zinc-600 dark:text-zinc-300 text-xs pb-2 pt-4 pl-6 font-sans hidden md:block`};
    }

    & > a {
        ${tw`flex gap-2 items-center px-4 py-2 text-zinc-600 dark:text-zinc-300 no-underline transition-all duration-150 ease-in-out`};

        & > svg {
            ${tw`w-5 h-5`};
        }

        & > span {
            ${tw`hidden md:inline`};
        }

        &:hover {
            ${tw`text-zinc-900 bg-zinc-300 dark:(text-zinc-100 bg-zinc-700)`};
        }

        &.active {
            ${tw`text-zinc-900 bg-zinc-200 dark:(text-zinc-100 bg-zinc-800)`};
            box-shadow: inset 2px 0 ${theme`colors.blue.600`.toString()};
            background-image: linear-gradient(to right, ${theme`colors.blue.600`.toString()}40, transparent);
        }
    }
`;

const Sidebar = ({ children }: { children?: React.ReactNode }): JSX.Element => {
    return (
        <StyledSidebar>
            <NavLink to={'/'} exact>
                <ServerIcon /> <span>Dashboard</span>
            </NavLink>

            <h6>Your Account</h6>
            {routes.account
                .filter((route) => !!route.name)
                .map((route) => (
                    <NavLink key={route.path} to={'/account' + route.path} exact={route.exact}>
                        <>
                            {route.icon && (
                                <>
                                    <route.icon />{' '}
                                </>
                            )}
                            <span>{route.name}</span>
                        </>
                    </NavLink>
                ))}

            {children}
        </StyledSidebar>
    );
};

export default Sidebar;
