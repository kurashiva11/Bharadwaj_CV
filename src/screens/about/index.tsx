import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import useScrollEffect from '../../hooks/useScrollEffect';
import styles from './about.module.scss';

export default function About() {
    const navigate = useNavigate();

    useScrollEffect({
        onScrollTop: () => {
            console.log("scrolling top")
            // navigate('/*', {replace: true});
        },
        onScrollBottom: () => {
            console.log("scrolling bottom")
            navigate('/achievements', {replace: true});
        }
    })

    useEffect(() => {
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
