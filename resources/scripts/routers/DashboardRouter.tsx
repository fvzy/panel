import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import DashboardContainer from '@/components/dashboard/DashboardContainer';
import { NotFound } from '@/components/elements/ScreenBlock';
import TransitionRouter from '@/TransitionRouter';
import { useLocation } from 'react-router';
import Sidebar from '@/components/elements/Sidebar';
import SwitchWrapperDiv from '@/components/elements/SwitchWrapperDiv';
import tw from 'twin.macro';
import routes from '@/routers/routes';

export default () => {
    const location = useLocation();

    return (
        <>
            <NavigationBar />
            <div css={tw`flex w-full h-[calc(100% - 3.5rem)] gap-4`}>
                <Sidebar />
                <SwitchWrapperDiv>
                    <TransitionRouter>
                        <Switch location={location}>
                            <Route path={'/'} exact>
                                <DashboardContainer />
                            </Route>
                            {routes.account.map(({ path, component: Component }) => (
                                <Route key={path} path={`/account/${path}`.replace('//', '/')} exact>
                                    <Component />
                                </Route>
                            ))}
                            <Route path={'*'}>
                                <NotFound />
                            </Route>
                        </Switch>
                    </TransitionRouter>
                </SwitchWrapperDiv>
            </div>
        </>
    );
};
