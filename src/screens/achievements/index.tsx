import { useEffect } from 'react';

import withScrollEffect from '../../HOC/withScrollEffect';
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

export default withScrollEffect(Achievements, {nextScreen: '/achievements', prevScreen: '/'});