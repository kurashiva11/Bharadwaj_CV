import { ReactChildren, useRef } from 'react';
import styles from './index.module.scss';

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
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default Header