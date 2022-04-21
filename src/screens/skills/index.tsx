import styles from './index.module.scss';

import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';

type Props = {
    isActive: boolean;
}

function Skills(props: Props) {
    return (
        <div className={styles['skills']}>
            skills
            <div className={styles["area"]} >
                <ul className={styles["circles"]}>
                    {Array(15).fill(0).map(() => <li></li>)}
                </ul>
            </div >
        </div>
    )
}

export default withMountAnimatedScreen(Skills);