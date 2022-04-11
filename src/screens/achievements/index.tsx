import { useEffect, useRef } from 'react';

import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';

import useSVGOnScreen from '../../hooks/useSVGOnScreen';
import styles from './achievements.module.scss';

import {astronautJS} from '../../components/astronaut/astronaut';
import {astronautSVG} from '../../components/astronaut/astronautSVG';

type Props = {
    isActive: boolean;
}

function Achievements(props: Props) {
    const svgRef = useRef<HTMLDivElement>(null);

    useSVGOnScreen(props.isActive, astronautSVG, astronautJS, svgRef);

    return (
        <div className={styles.achievement}>
            <div ref={svgRef} className={styles["svg_container"]}></div>
        </div>
    )
}

export default withMountAnimatedScreen(Achievements);