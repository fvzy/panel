import React, { CSSProperties } from 'react';

interface Props {
    icon: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}

const Icon = ({ className, style, ...props }: Props) => {
    return (
        <span className={className} style={style}>
            {props.icon}
        </span>
    );
};

export default Icon;
