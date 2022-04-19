import { ReactChildren } from 'react';
import styles from './index.module.scss';

type Props = {
    children: ReactChildren | JSX.Element[];
}

function Header(props: Props) {
    return (
        <div className={styles['header']}>
            <div className={styles["container"]}>
                header
            </div>
            {props.children}
        </div>
    )
}

export default Header