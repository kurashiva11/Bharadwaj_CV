import { useEffect, useRef } from 'react';
import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';
import styles from './about.module.scss';

function About() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        var ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
            ctx.moveTo(0, 0);
            ctx.lineTo(150, 80);
            ctx.stroke();
        }
    }, []);

    return (
        <div className={styles.about}>
            <div className={styles.introduction}>
                <div className={styles["introduction-name"]}>Bharadwaj Kura.</div>
                <div className={styles["introduction-resignation"]}>Software Developer.</div>
            </div>
            <div className={styles["game_comtainer"]}>
                game
                <canvas
                    ref={canvasRef}
                    width="200"
                    height="100"
                    style={{ border: "1px solid #d3d3d3" }}
                >
                    Your browser does not support the HTML canvas tag.
                </canvas>
            </div>
        </div>
    );
}

export default withMountAnimatedScreen(About);