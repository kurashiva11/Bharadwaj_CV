import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';

import styles from './index.module.scss';

type Props = {
    isActive: boolean;
}


function Projects(props: Props) {
    return (
        <div className={styles['projects']}>
            projects
        </div>
    )
}

export default withMountAnimatedScreen(Projects);