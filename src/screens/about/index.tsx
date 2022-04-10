import { useState, useEffect, useRef } from 'react';
import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';
import styles from './about.module.scss';

import Game from './game';

function About() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const scoreRef = useRef<HTMLCanvasElement>(null);
    const [game, setGame] = useState<any>(null);
    const [playing, setPlaying] = useState<boolean>(false);

    const showGameTextOnCanvas = () => {
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx) {
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.fillText(game ? "Resume Game?" : "Play Game?", ctx.canvas.width/2 - 50, ctx.canvas.height/2);
        }
    }

    const setPlayingGame = (p: boolean) => {
        setPlaying(p);
        if (!p) {
            showGameTextOnCanvas();
        }
    }

    const gameOver = () => {
        setGame(null)
        setPlayingGame(false);
    }

    const startGame = () => {
        // if game is already started.
        if (game) {
            setPlayingGame(true);
            game.startGame();
            return;
        }
        const asteroid = new Image();
        asteroid.src = require('../../assets/asteroid.png');
        const planet = new Image();
        planet.src = require('../../assets/earth.png');
        asteroid.onload = () => {
            var ctx = canvasRef.current?.getContext("2d");
            planet.onload = () => {
                if (ctx && scoreRef.current) {
                    setPlayingGame(true);
                    const g = new Game(ctx, scoreRef.current, asteroid, planet, gameOver);
                    setGame(g);
                }
            }
        }
    }

    const pauseGame = () => {
        game.pauseGame();
        setPlayingGame(false);
    }

    useEffect(() => {
        // @ts-ignore
        canvasRef.current && (canvasRef.current.width = canvasRef.current?.parentNode?.clientWidth);
        // @ts-ignore
        canvasRef.current && (canvasRef.current.height = canvasRef.current?.parentNode?.clientHeight);

        showGameTextOnCanvas();
    }, []);

    return (
        <div className={styles.about}>
            <div className={styles["game_container"]}>
                <div className={styles["canvas--container"]}>
                    {/* game */}
                    <canvas ref={canvasRef} onClick={playing ? undefined : startGame}>
                        Your browser does not support the HTML canvas tag.
                    </canvas>
                </div>
                {playing && (
                    <div className={styles["pause--game"]} onClick={pauseGame}>
                        <p>PAUSE GAME.</p>
                    </div>
                )}
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