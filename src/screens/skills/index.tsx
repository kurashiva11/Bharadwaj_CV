import { useEffect } from 'react';
import styles from './index.module.scss';

import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';

import TagCloudJS from './TagCloug';

type Props = {
    isActive: boolean;
}

const technicalSkills = [
    'JavaScript', 'Java', 'C++',
    'Python', 'Reactjs', 'React Native',
    'Django', 'HTML/CSS', 'Docker',
    'Git', 'Node JS', 'MySQL',
    'MongoDB',
];

function Skills(props: Props) {

    useEffect(() => {
        TagCloudJS("." + styles['Sphere'], technicalSkills, {
            radius: window.innerWidth / 4,
            maxSpeed: 'fast',
            initSpeed: 'fast',
            direction: 135,
            keep: true,
        })
    }, []);

    return (
        <div className={styles['skills']}>
            <div className={styles["container"]}>
                <span className={styles["Sphere"]}></span>
            </div>

            <div className={styles["area"]} >
                <ul className={styles["circles"]}>
                    {Array(15).fill(0).map((_, index) => <li key={index}></li>)}
                </ul>
            </div >
        </div>
    )
}

export default withMountAnimatedScreen(Skills);