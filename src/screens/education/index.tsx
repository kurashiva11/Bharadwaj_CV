import { useRef, useEffect } from "react";

import useSVGOnScreen from "../../hooks/useSVGOnScreen";
import withMountAnimatedScreen from "../../HOC/withMountAnimatedScreen";
import styles from "./education.module.scss";

import { educationJS } from "../../components/SVGs/education/education";
import { educationSVG } from "../../components/SVGs/education/educationSVG";

type Props = {
    isActive: boolean;
}

function Education(props: Props) {
    const svgRef = useRef<HTMLDivElement>(null);

    useSVGOnScreen(props.isActive, educationSVG, educationJS, svgRef);

    return (
        <div className={styles.education}>
        <div className={styles["svg_container"]}>
            <div ref={svgRef} className={styles["svg"]}></div>
        </div>
        </div>
    );
}

export default withMountAnimatedScreen(Education);
