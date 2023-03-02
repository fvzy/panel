import React, { createRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Fade from '@/components/elements/Fade';

interface Props {
    children: React.ReactNode;
    renderToggle: (onClick: (e: React.MouseEvent<any, MouseEvent>) => void) => React.ReactChild;
}

export const DropdownButtonRow = styled.button<{ danger?: boolean }>`
    ${tw`p-2 flex w-full items-center rounded transition duration-150 ease-in-out border border-transparent`};
    ${tw`hover:(bg-zinc-100 text-zinc-700 border-zinc-400 dark:(bg-zinc-700 text-zinc-100 border-zinc-500))`};
    ${(props) => props.danger && tw`hover:(bg-red-600 text-red-50 border-red-800)!`};
    & > svg {
        ${tw`w-4 h-4`};
    }
`;

interface State {
    posX: number;
    posY: number;
    visible: boolean;
}

class DropdownMenu extends React.PureComponent<Props, State> {
    menu = createRef<HTMLDivElement>();

    state: State = {
        posX: 0,
        posY: 0,
        visible: false,
    };

    componentWillUnmount() {
        this.removeListeners();
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
        const menu = this.menu.current;

        if (this.state.visible && !prevState.visible && menu) {
            setTimeout(() => {
                document.addEventListener('click', this.windowListener);
                document.addEventListener('contextmenu', this.contextMenuListener);
            }, 150);
            menu.style.top =
                menu.clientHeight + this.state.posY > window.innerHeight
                    ? `${Math.round(this.state.posY - menu.clientHeight)}px`
                    : `${Math.round(this.state.posY)}px`;
            menu.style.left = `${Math.round(this.state.posX - menu.clientWidth)}px`;
        }

        if (!this.state.visible && prevState.visible) {
            this.removeListeners();
        }
    }

    removeListeners = () => {
        document.removeEventListener('click', this.windowListener);
        document.removeEventListener('contextmenu', this.contextMenuListener);
    };

    onClickHandler = (e: React.MouseEvent<any, MouseEvent>) => {
        e.preventDefault();
        this.triggerMenu(e.clientX, e.clientY);
    };

    contextMenuListener = () => this.setState({ visible: false });

    windowListener = (e: MouseEvent) => {
        const menu = this.menu.current;

        if (e.button === 2 || !this.state.visible || !menu) {
            return;
        }

        if (e.target === menu || menu.contains(e.target as Node)) {
            return;
        }

        if (e.target !== menu && !menu.contains(e.target as Node)) {
            this.setState({ visible: false });
        }
    };

    triggerMenu = (posX: number, posY: number) =>
        this.setState((s) => ({
            posX: !s.visible ? posX : s.posX,
            posY: !s.visible ? posY : s.posY,
            visible: !s.visible,
        }));

    render() {
        return (
            <div>
                {this.props.renderToggle(this.onClickHandler)}
                <Fade timeout={150} in={this.state.visible} unmountOnExit>
                    <div
                        ref={this.menu}
                        onClick={(e) => {
                            e.stopPropagation();
                            this.setState({ visible: false });
                        }}
                        style={{ width: '12rem' }}
                        css={tw`fixed bg-zinc-200 p-2 rounded border border-zinc-700 shadow-lg text-zinc-700 dark:(bg-zinc-800 border-zinc-600 text-zinc-200) z-50`}
                    >
                        {this.props.children}
                    </div>
                </Fade>
            </div>
        );
    }
}

export default DropdownMenu;
