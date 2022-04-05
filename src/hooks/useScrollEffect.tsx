import { useEffect, useMemo } from "react";
import { debounce } from 'lodash';

import { screenScrollTime } from '../constants';


type scrollEffectOptions = {
    onScrollTop: () => void;
    onscrollBottom: () => void;
}

const RESISTANCE = 40;

const useScrollEffect = (options: scrollEffectOptions) => {
    console.log('options =', options);
    // const scroll = useCallback((cb) => debounce(cb, screenScrollTime, {leading: true}), []);
    const debouncedScrollTop = useMemo(() => debounce(options.onScrollTop, screenScrollTime, {leading: true, trailing: false}), []);
    const debouncedScrollBottom = useMemo(() => debounce(options.onscrollBottom, screenScrollTime, {leading: true, trailing: false}), []);

    useEffect(() => {
        document.addEventListener('wheel', (event: any) => {
            // whellDelta is difference between the previous scroll and current scroll, so can be used to determine the scroll direction.
            if (event.wheelDelta > RESISTANCE) {
                debouncedScrollTop();
            } else if (event.wheelDelta < -RESISTANCE) {
                debouncedScrollBottom();
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useScrollEffect;
