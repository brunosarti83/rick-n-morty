// import styles
import styles from './About.module.css';


export default function About() {

    const mail = 'brunosarti.bs@gmail.com'
    const github = 'brunosarti83'

    return (
        <div className={styles.container}>
            <h1>Soy Bruno 🖐</h1>
            <div className={styles.grid}>
                <div className={styles.dataColumn}></div>
                <div className={styles.imageSide}></div>
            </div>
        </div>
    )
}