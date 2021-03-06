import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';
import styles from './about.module.scss';

import { ReactComponent as NameSVG } from '../../components/SVGs/name.svg';
import { ReactComponent as RoleSVG } from '../../components/SVGs/role.svg';

type Props = {
    isActive: boolean;
}

function About(props: Props) {
    return (
        <div className={styles.about} id="About">
            <div className={styles.introduction}>
                <div className={styles["introduction--container"]}>
                    <div className={styles["introduction-name"]}><NameSVG /></div>
                    <div className={styles["introduction-designation"]}><RoleSVG /></div>
                </div>
            </div>

            <div className={styles["jelly-container"]}>
                {Array(10).fill(0).map((_, index)=> <div className={styles['bubble-' + (index+1)]} key={index}></div>)}
                <div className={styles["jelly-wrapper"]}>
                    <div className={styles["jelly-hair"]}></div>
                    <div className={styles["jelly-body"]}>
                        <div className={styles["jelly-inner"]}>
                            <div className={styles["jelly-eyes"]}></div>
                            <div className={styles["jelly-mouth"]}></div>
                            <div className={styles["jelly-hands"]}></div>
                        </div>
                    </div>
                    {Array(5).fill(0).map((_, index)=> <div className={[styles['jelly-tentacle-' + (index+1)], styles['jelly-tentacle']].join(' ')} key={index}></div>)}
                </div>
                <div className={styles["jelly-shadow"]}></div>
                {Array(10).fill(0).map((_, index)=> <div className={[styles['bubble-' + (index+10+1)], styles['bubble']].join(' ')} key={index}></div>)}
            </div>

            <div className={styles["bg-waves"]}>
                <svg className={styles["waves"]} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className={styles["parallax"]}>
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0,0,255,0.7" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0,0,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,0,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#00f" />
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default withMountAnimatedScreen(About);