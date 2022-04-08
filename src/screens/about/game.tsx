const BULLET_VELOCITY = 5;

class Circle {
    ctx: any;
    x: number;
    y: number;
    radius: number;
    color: [number, number, number];
    constructor(ctx: any, x: number, y: number, radius: number, color: [number, number, number]) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw () {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.fillStyle = `rgb(${this.color[0]}, ${this.color[1]}, ${this.color[2]})`;
        this.ctx.fill();
    }
}

class MovingCircle extends Circle {
    velocity: {x: number, y: number};
    constructor(ctx: any, x: number, y: number, radius: number, color: [number, number, number], velocity: {x: number, y: number}) {
        super(ctx, x, y, radius, color);
        this.velocity = velocity;

        this.draw.bind(this);
    }

    draw(): void {
        super.draw();
        let prevX = this.x - this.velocity.x + this.radius/2;
        let prevY = this.y - this.velocity.y + this.radius/2
        this.ctx.arc(prevX, prevY, this.radius, 0, Math.PI * 2, false);
        this.ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, 0.4)`;
        this.ctx.fill();
    }
}

class Player extends Circle {
    constructor(ctx: any) {
        super(ctx, ctx.canvas.width / 2, ctx.canvas.height / 2, 20, [0, 0, 0]);
    }
}

class Bullet extends MovingCircle {
    constructor(ctx: any, x: number, y: number, velocity: {x: number, y: number}) {
        super(ctx, x, y, 10, [0, 0, 0], velocity);
    }

    update () {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}

class Enemy extends MovingCircle {

    constructor(ctx: any, x: number, y: number, radius: number, velocity: {x: number, y: number}) {
        super(ctx, x, y, radius, [255, 0, 0], velocity);
    }

    update () {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}

class Game {
    ctx: any;
    player: Player;
    bullets: Bullet[] = [];
    enemies: Enemy[] = [];
    animationFrame: any;
    score: number = 0;

    constructor(ctx: any) {
        this.ctx = ctx;

        ctx.canvas.addEventListener('mousedown', (event: any) => {
            let {width, height} = this.ctx.canvas;
            const angle = Math.atan2(event.clientY - height / 2, event.clientX - width / 2);
            const velocity = {
                x: Math.cos(angle) * BULLET_VELOCITY,
                y: Math.sin(angle) * BULLET_VELOCITY,
            }
            this.bullets.push(new Bullet(this.ctx, width / 2, height / 2, velocity));
        });

        // spawning enemies every second.
        setInterval(() => {
            let {width, height} = this.ctx.canvas;
            let x, y;
            let radius = Math.random() * (40 - 10) + 10;
            if (Math.random() < 0.5) {
                x = Math.random() * width;
                y = Math.random() < 0.5 ? 0 - radius : height + radius;    
            } else {
                x = Math.random() < 0.5 ? 0 - radius : width + radius;
                y = Math.random() * height;
            }
            const angle = Math.atan2(height / 2 - y, width / 2 - x);
            const velocity = {
                x: Math.cos(angle),
                y: Math.sin(angle),
            }
            this.enemies.push(new Enemy(this.ctx, x, y, radius, velocity))
        }, 1000 - this.score * 3);

        this.player = new Player(this.ctx);

        this.animate.bind(this);
        this.detectBulletEnemyCollition.bind(this);
        this.animate();
    }

    detectBulletEnemyCollition(enemy: Enemy, enemyIndex: number) {
        this.bullets.forEach((bullet, index) => {
            let dist = Math.hypot(bullet.x - enemy.x, bullet.y - enemy.y);
            if (dist -enemy.radius - bullet.radius < 0.5) {
                // setTimeout is a simple hack to remove the canvas reload/blink.
                setTimeout(() => {
                    // removing the enemy and bullet, as enemy hit by the bullet.
                    this.enemies.splice(enemyIndex, 1);
                    this.bullets.splice(index, 1);
                }, 0);
                this.score += 1;
            }
        })
    }

    animate() {
        this.animationFrame = requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

        this.player.draw();
        this.bullets.forEach((bullet, index) => {
            bullet.update();

            // removing the bullets which moved out of the canvas.
            if (bullet.x - bullet.radius < 0 ||
                bullet.x + bullet.radius > this.ctx.canvas.width ||
                bullet.y - bullet.radius < 0 ||
                bullet.y + bullet.radius > this.ctx.canvas.height) {
                    setTimeout(() => {
                        this.bullets.splice(index, 1);
                    }, 0);
                }
        });

        this.enemies.forEach((enemy, index) => {
            enemy.update();

            const enemyPlayerDist = Math.hypot(this.player.x - enemy.x, this.player.y - enemy.y);
            if (enemyPlayerDist - this.player.radius - enemy.radius < 1) {
                cancelAnimationFrame(this.animationFrame);
            }

            this.detectBulletEnemyCollition(enemy, index);
        })
    }
}

export default Game;