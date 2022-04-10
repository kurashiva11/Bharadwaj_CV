import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';

import styles from './index.module.scss';

function Experience() {
    return (
        <div className={styles.experience}>
            <div className={styles["details"]}>
                <div className="details_container">
                    <div className={styles["details--box"]}>
                        <div className={styles["content"]}>
                            <div className={styles["company--name"]}>
                                <a href="https://www.microsoft.com/en-in" target="_blank" rel="noreferrer noopener">Microsoft</a>
                            </div>
                            <div className={styles["designation"]}>Software Engineer</div>
                            <div className={styles["duration"]}>
                                May 2022 - Present
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["details--box"]}>
                    <div className={styles["content"]}>
                        <div className={styles["company--name"]}>
                            <a href="https://www.ibigroup.com/" target="_blank" rel="noreferrer noopener">IBI group</a>
                        </div>
                        <div className={styles["designation"]}>Software Developer</div>
                        <div className={styles["duration"]}>
                            April 2021 - May 2022
                        </div>
                    </div>
                </div>
                <div className={styles["details--box"]}>
                    <div className={styles["content"]}>
                        <div className={styles["company--name"]}>
                            <a href="https://www.virtusa.com/" target="_blank" rel="noreferrer noopener">Virtusa</a>
                        </div>
                        <div className={styles["designation"]}>Full Stack Developer Intern</div>
                        <div className={styles["duration"]}>
                            MAY 2020 ‐ JULY 2020
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["gif--container"]}>
            </div>
        </div>
    )
}

export default withMountAnimatedScreen(Experience)