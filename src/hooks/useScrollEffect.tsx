/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from "react";
import { debounce } from 'lodash';

import { screenScrollTime } from '../constants';


type scrollEffectOptions = {
    onScrollTop: () => void;
    onScrollBottom: () => void;
}

const RESISTANCE = 40;

const useScrollEffect = (options: scrollEffectOptions) => {
    const debouncedScrollTop = useMemo(() => debounce(options.onScrollTop, screenScrollTime, {leading: true, trailing: false}), []);
    const debouncedScrollBottom = useMemo(() => debounce(options.onScrollBottom, screenScrollTime, {leading: true, trailing: false}), []);

    useEffect(() => {
        document.addEventListener('wheel', (event: any) => {
            // whellDelta is difference between the previous scroll and current scroll, so can be used to determine the scroll direction.
            if (event.wheelDelta > RESISTANCE) {
                debouncedScrollTop();
            } else if (event.wheelDelta < -RESISTANCE) {
                debouncedScrollBottom();
            }
        });
    }, []);
}

export default useScrollEffect;
