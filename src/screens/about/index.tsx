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

        const img = new Image();
        img.src = require('../../assets/asteroid.png');
        img.onload = () => {
            console.log('img loaded')
            if (ctx && scoreRef.current) {
                new Game(ctx, scoreRef.current, img);
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
                <img id='hide' src={require('../../assets/asteroid.png')} width='60' height='60' />
                <div className={styles["start--game"]}>
                    {/* TODO: add start and stop game and call new game only if user starts the game. and once game is ended then also ask user to play again? */}
                    {/* TODO: replace circles with planets and astroids */}
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