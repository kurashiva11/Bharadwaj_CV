import { useEffect, useRef } from 'react';
import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';
import styles from './about.module.scss';

import Game from './game';

function About() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const scoreRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        var ctx = canvasRef.current?.getContext("2d");
        // @ts-ignore
        canvasRef.current && (canvasRef.current.width = canvasRef.current?.parentNode?.clientWidth);
        // @ts-ignore
        canvasRef.current && (canvasRef.current.height = canvasRef.current?.parentNode?.clientHeight);

        const asteroid = new Image();
        asteroid.src = require('../../assets/asteroid.png');
        const planet = new Image();
        planet.src = require('../../assets/earth.png');
        asteroid.onload = () => {
            planet.onload = () => {
                if (ctx && scoreRef.current) {
                    new Game(ctx, scoreRef.current, asteroid, planet);
                }
            }
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
                <div className="image"></div>
                <div className={styles["start--game"]}>
                    {/* TODO: add start and stop game and call new game only if user starts the game. and once game is ended then also ask user to play again? */}
                    {/* TODO: fix MovingCircle redraw issue. */}
                    {/* TODO: add particles after be blast an astroid */}
                </div>
            </div>
            <div className={styles["score"]}>score: <span ref={scoreRef}>0</span></div>
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