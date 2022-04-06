import React from "react";
import { useNavigate } from "react-router";

import useScrollEffect from '../hooks/useScrollEffect';

type Props = {
    nextScreen?: string;
    prevScreen?: string;
}

export default function withScrollEffect (WrappedComponent: React.Component | React.FC, props: Props) {
    return function(functionProps: any) {
        const navigate = useNavigate();

        useScrollEffect({
            onScrollTop: () => {
                props.prevScreen && navigate(props.prevScreen, {replace: true});
            },
            onScrollBottom: () => {
                props.nextScreen && navigate(props.nextScreen, {replace: true});
            }
        });

        // @ts-ignore
        return <WrappedComponent {...functionProps} />;
    }
}