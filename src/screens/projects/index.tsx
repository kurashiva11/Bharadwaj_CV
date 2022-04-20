import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';

import styles from './index.module.scss';

type Props = {
    isActive: boolean;
}

const projectsData = [
    {
        title: '1st',
        describe: 'this is first',
        uri: 'google.com/'
    },
    {
        title: '1st',
        describe: 'this is first',
        uri: 'google.com/'
    },
    {
        title: '1st',
        describe: 'this is first',
        uri: 'google.com/'
    },
    {
        title: '1st',
        describe: 'this is first',
        uri: 'google.com/'
    },
    {
        title: '1st',
        describe: 'this is first',
        uri: 'google.com/'
    },
]


function Projects(props: Props) {
    return (
        <div className={styles['projects']}>
            <ul className={styles["grid"]}>
                {[...projectsData].map((project) => {
                    return (
                        <li onClick={()=> window.open(project.uri, "_blank")}>
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