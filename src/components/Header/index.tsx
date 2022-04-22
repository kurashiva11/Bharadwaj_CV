import { ReactChildren, useRef } from 'react';
import styles from './index.module.scss';

// importing icons.
const linkedin = require('../../assets/linkedin-icon.png');
const github = require('../../assets/github-icon.png');
const leetcode = require('../../assets/leetcode-icon.png');
const hackerrank = require('../../assets/hackerrank-icon.png');

// import resume.
const resume = require('../../assets/KuraBharadwaj_Resume.pdf')

type Props = {
    children: ReactChildren | JSX.Element[];
}

function Header(props: Props) {
    const hamBurgerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const menuPressHandler = () => {
        hamBurgerRef.current?.classList.toggle(styles['hamberger-open']);
        menuRef.current?.classList.toggle(styles['menu-show']);
    }

    const profilePressHandler = (profile: string) => {
        console.log(profile);
    }

    return (
        <div className={styles['header']}>
            <div className={styles["container"]}>
                <div className={styles["top-navbar"]}>
                    <div className={styles["resume"]} onClick={() => window.location.reload()}>Bharadwaj Kura</div>

                    <div ref={hamBurgerRef} className={styles["hamburger-icon"]}>
                        <span className={[styles["bar"],styles["bar1"]].join(' ')}></span>
                        <span className={[styles["bar"], styles["bar2"]].join(' ')}></span>
                        <span className={[styles["bar"], styles["bar2"]].join(' ')}></span>
                        <input type="checkbox" onClick={menuPressHandler}/>
                    </div>
                    <div ref={menuRef} className={styles["menu"]}>
                        <ul>
                            <li><a href="#About">About</a></li>
                            <li><a href="#Experience">Experience</a></li>
                            <li><a href="#Projects">Projects</a></li>
                            <li><a href="#Skills">Skills</a></li>
                        </ul>
                    </div>

                    <div className={styles["profiles"]}>
                        <span className={styles["profile"]} onClick={() => window.open('https://www.linkedin.com/in/bharadwaj-kura-36828b18a/', '_blank')}><img src={linkedin} alt="." /></span>
                        <span className={styles["profile"]} onClick={() => window.open('https://github.com/kurashiva11', '_blank')}><img src={github} alt="." /></span>
                        <span className={styles["profile"]} onClick={() => window.open('https://leetcode.com/kurashiva/', '_blank')}><img src={leetcode} alt="." /></span>
                        <span className={styles["profile"]} onClick={() => window.open('https://www.hackerrank.com/kura_shiva', '_blank')}><img src={hackerrank} alt="." /></span>

                        <span className={styles["download--gif"]} onClick={() => window.open(resume, '_blank')}></span>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default Header