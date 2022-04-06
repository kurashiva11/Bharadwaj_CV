/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo } from "react";
import { throttle } from 'lodash';

import { screenScrollTime } from '../constants';


type scrollEffectOptions = {
    onScrollTop: () => void;
    onScrollBottom: () => void;
}

const RESISTANCE = 40;

const useScrollEffect = (options: scrollEffectOptions) => {
    const debouncedScrollTop = useMemo(() => throttle(options.onScrollTop, screenScrollTime, {trailing: false}), []);
    const debouncedScrollBottom = useMemo(() => throttle(options.onScrollBottom, screenScrollTime, {trailing: false}), []);

    const onScroll = useCallback((event: any) => {
        // whellDelta is difference between the previous scroll and current scroll, so can be used to determine the scroll direction.
        if (event.wheelDelta > RESISTANCE) {
            debouncedScrollTop();
        } else if (event.wheelDelta < -RESISTANCE) {
            debouncedScrollBottom();
        }
    }, []);

    useEffect(() => {
        document.addEventListener('wheel', onScroll, false);
        
        // remove the previous screen's event listener to avoid multiple attachment of listeners
        return () => document.removeEventListener('wheel', onScroll, false);
    }, []);
}

export default useScrollEffect;
