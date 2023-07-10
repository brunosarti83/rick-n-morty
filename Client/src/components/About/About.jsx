// import styles
import styles from './About.module.css';


export default function About() {

    const mail = 'brunosarti.bs@gmail.com'
    const github = 'brunosarti83'

    return (
        <div className={styles.container}>
            <h1>Soy Bruno 🖐</h1>
            <div className={styles.grid}>
                <div className={styles.dataColumn}>
                    < div className={styles.text}>
                        <h2><ion-icon name="logo-github"></ion-icon> /brunosarti83</h2>
                        <div className={styles.linkedin}>
                            <p>Estudiante en Henry <ion-icon name="school"></ion-icon> FullStack Developer<br></br>
                            Javascript / React / HTML / CSS / Express / PostgreSQL<br></br>
                            
                            </p>  
                            <h2><ion-icon name="logo-linkedin"></ion-icon> /brunosarti83</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.imgDiv}>
                    <div className={styles.image}></div>
                </div>
            </div>
        </div>
    )
}