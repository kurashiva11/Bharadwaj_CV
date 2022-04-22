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
            <ul className={styles["grid"]}>
                {[...projectsData].map((project) => {
                    return (
                        <li onClick={()=> window.open(project.uri, "_blank")} key={project.title}>
                            <div className={styles["title"]}>{project.title}</div>
                            <span className={styles["description"]}>{project.describe}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default withMountAnimatedScreen(Projects);