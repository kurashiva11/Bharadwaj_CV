import { useEffect, useRef } from 'react';

import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';
import styles from './achievements.module.scss';

import {astronautJS} from '../../components/astronaut/astronaut';
import {astronautSVG} from '../../components/astronaut/astronautSVG';

function Achievements() {
    const svgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (svgRef.current) {
            svgRef.current.innerHTML = astronautSVG;

            let script = document.createElement('script');
            script.innerHTML = astronautJS;
            setTimeout(() => {
                document.body.appendChild(script);
            }, 100);
        }
    }, []);

    return (
        <div className={styles.achievement}>
            <div ref={svgRef} className={styles["svg_container"]}></div>
        </div>
    )
}

export default withMountAnimatedScreen(Achievements);