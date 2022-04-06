import React from "react";

function withMountAnimatedScreen(WrappedComponent: React.Component | React.FC) {
    return function (componentProps: any) {
        return (
            <div className='screen'>
                <div className='content-wrapper'>
                    {/* @ts-ignore */}
                    <WrappedComponent {...componentProps} />
                </div>
            </div>
        );
    };
}

export default withMountAnimatedScreen;
