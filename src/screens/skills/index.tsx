import styles from './index.module.scss';

import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';

type Props = {
    isActive: boolean;
}

function Skills(props: Props) {
    return (
        <div className={styles['skills']}>skills</div>
    )
}

export default withMountAnimatedScreen(Skills);