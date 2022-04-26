import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';

import styles from './index.module.scss';

type Props = {
    isActive: boolean;
}

const projectsData = [
    {
        title: 'Notes App',
        describe: 'An app where you can read, write notes from any device.',
        uri: 'https://notes-app2.herokuapp.com/'
    },
    {
        title: 'College File Sharing System',
        describe: 'An all in one App where you, your teachers and your collage/school management can share the files with each other.',
        uri: 'https://file-sharing-system.herokuapp.com/'
    },
    {
        title: 'Chess Game',
        describe: 'A multi Player Game where 2 people can play online',
        uri: 'https://multiplayer-chess-game.herokuapp.com/'
    },
    {
        title: 'Weather Forecast',
        describe: 'An app that helps farmers by predicting whether',
        uri: 'https://forecast--weather.herokuapp.com/'
    },
    {
        title: 'Sortings Visualization',
        describe: 'A very simple HTML, css, JS page where you can literally visualize how some basic sorting algorithms work',
        uri: 'https://kurashiva11.github.io/Sortings-Visualization/'
    },
]


function Projects(props: Props) {
    return (
        <div className={styles['projects']} id="Projects">

            <div className={styles["content"]}>
                <div className={"ui grid stackable".split(' ').map(s => styles[s]).join(' ')}>
                    <div className={"fifteen wide computer fourteen wide tablet sixteen wide mobile column right floated".split(' ').map(s => styles[s]).join(' ')}>
                        <div className={styles["content_maintitle"]}>
                            <p>Projects</p>
                        </div>
                        <div className={"content_sub-first content_sub".split(' ').map(s => styles[s]).join(' ')}>
                            {projectsData.map((project, index) => (
                                <div className={styles["content_box"]} key={index} onClick={() => window.open(project.uri, '_blank')}>
                                    <div className={styles["content-content"]}>
                                        <h3 className={styles["title"]}><div className={styles["mobile-number-count"]}>{index + 1}</div>{project.title}</h3>
                                        <p>{project.describe}</p>
                                    </div>
                                    <div className={styles["number-count-" + (index%2===0 ? 'odd' : 'even')]}>
                                        {index + 1}
                                    </div>
                                </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles["persons"]}>
                {Array(8).fill(0).map((_, index) => (<div className={styles["person" + index]}>
                    <div className={styles["head--container"]}>
                        <div className={styles["head"]}>
                            <div className={styles["face"]}></div>
                        </div>
                    </div>

                    <div className={styles["hands"]}>
                        <div className={styles["left"]}>
                            <div className={styles["bicep"]}></div>
                            <div className={styles["foreamr--container"]}>
                                <div className={styles["forearm"]}></div>
                            </div>
                        </div>
                        <div className={styles["right"]}>
                            <div className={styles["bicep"]}></div>
                            <div className={styles["foreamr--container"]}>
                                <div className={styles["forearm"]}></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles["stomach"]}></div>

                    <div className={styles["legs"]}>
                        <div className={styles["left"]}>
                            <div className={styles["thigh"]}></div>
                            <div className={styles["feet--container"]}>
                                <div className={styles["feet"]}></div>
                            </div>
                        </div>
                        <div className={styles["right"]}>
                            <div className={styles["thigh"]}></div>
                            <div className={styles["feet--container"]}>
                                <div className={styles["feet"]}></div>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default withMountAnimatedScreen(Projects);