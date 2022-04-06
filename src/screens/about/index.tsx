import { useEffect } from 'react';
import withScrollEffect from '../../HOC/withScrollEffect';

import styles from './about.module.scss';

function About() {
    useEffect(() => {
        console.log('About mounted');
        return () => {
            console.log('removing about');
        }
    }, [])

    return (
        <div className={styles.about}>
            About Page.
        </div>
    );
}

export default withScrollEffect(About, {nextScreen: '/achievements', prevScreen: '/'});
