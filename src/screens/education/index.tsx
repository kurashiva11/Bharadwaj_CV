import { useRef, useEffect } from "react";
import withMountAnimatedScreen from "../../HOC/withMountAnimatedScreen";
import styles from "./education.module.scss";

import { educationJS } from "../../components/education/education";
import { educationSVG } from "../../components/education/educationSVG";

function Education() {
    const svgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (svgRef.current) {
            svgRef.current.innerHTML = educationSVG;

            const script = document.createElement('script');
            script.innerHTML = educationJS;
            setTimeout(() => document.body.appendChild(script), 100);
        }
    }, []);

    return (
        <div className={styles.education}>
        <div className={styles["svg_container"]}>
            <div ref={svgRef} className={styles["svg"]}></div>
        </div>
        </div>
    );
}

export default withMountAnimatedScreen(Education);
