import { useEffect, useRef } from 'react';
import styles from './index.module.scss';

import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';
import useSVGOnScreen from "../../hooks/useSVGOnScreen";

import { educationJS } from "../../components/SVGs/education/education";
import { educationSVG } from "../../components/SVGs/education/educationSVG";

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
    const svgRef = useRef<HTMLDivElement>(null);

    useSVGOnScreen(props.isActive, educationSVG, educationJS, svgRef);


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
        <div className={styles['skills']} id="Skills">

            <div className={styles["skills--container"]}>
                <div className={styles["svg_container"]}>
                    <div ref={svgRef} className={styles["svg"]}></div>
                </div>

                <div className={styles["container"]}>
                    <span className={styles["Sphere"]}></span>
                </div>
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