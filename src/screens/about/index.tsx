import { useEffect, useRef } from 'react';
import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';
import styles from './about.module.scss';

import Game from './game';

function About() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        var ctx = canvasRef.current?.getContext("2d");
        // @ts-ignore
        console.log('canvasRef.current?.parentNode?.clientWidth =', canvasRef.current?.parentNode);
        // @ts-ignore
        canvasRef.current && (canvasRef.current.width = canvasRef.current?.parentNode?.clientWidth);
        // @ts-ignore
        canvasRef.current && (canvasRef.current.height = canvasRef.current?.parentNode?.clientHeight);
        //  // @ts-ignore
        //  canvasRef.current && (canvasRef.current.clientLeft = canvasRef.current?.parentNode?.clientLeft);
        //  // @ts-ignore
        //  canvasRef.current && (canvasRef.current.clientTop = canvasRef.current?.parentNode?.clientTop);

        if (ctx) {
            console.log(ctx);
            // @ts-ignore
            new Game(ctx);
        }
    }, []);

    return (
        <div className={styles.about}>
            <div className={styles["game_container"]}>
                <div className={styles["canvas--container"]}>
                    {/* game */}
                    <canvas ref={canvasRef}>
                        Your browser does not support the HTML canvas tag.
                    </canvas>
                </div>
            </div>
            <div className={styles.introduction}>
                <div className={styles["introduction--container"]}>
                    <div className={styles["introduction-name"]}>Bharadwaj Kura.</div>
                    <div className={styles["introduction-resignation"]}>Software Developer.</div>
                </div>
            </div>
        </div>
    );
}

export default withMountAnimatedScreen(About);