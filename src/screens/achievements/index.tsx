import { useEffect } from 'react';

import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';
import styles from './achievements.module.scss';

function Achievements() {
    useEffect(() => {
        console.log('achievements mounted');
        return () => {
            console.log('removing acievements');
        }
    }, [])

    return (
        <div className={styles.achievement}>Achievements</div>
    )
}

export default withMountAnimatedScreen(Achievements);