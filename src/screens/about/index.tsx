import { useEffect } from 'react';

import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';
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

export default withMountAnimatedScreen(About);