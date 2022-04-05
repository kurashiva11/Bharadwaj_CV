import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useScrollEffect from '../../hooks/useScrollEffect';
import styles from './achievements.module.scss';

function Achievements() {
    const navigate = useNavigate();

    useScrollEffect({
        onScrollTop: () => {
            console.log("scrolling top")
            navigate('/', {replace: true});
        },
        onScrollBottom: () => {
            console.log("scrolling bottom")
            // navigate('/*', {replace: true});
        },
    })

    useEffect(() => {
        return () => {
            console.log('removing acievements');
        }
    }, [])

    return (
        <div className={styles.achievement}>Achievements</div>
    )
}

export default Achievements