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
                            <p>Student @Henry <ion-icon name="school"></ion-icon> FullStack Developer<br></br>
                            <ion-icon name="logo-javascript"></ion-icon> Javascript  <ion-icon name="logo-react"></ion-icon> React   <ion-icon name="logo-html5"></ion-icon> HTML   <ion-icon name="logo-css3"></ion-icon> CSS <br /> <ion-icon name="server-outline"></ion-icon> Express  <ion-icon name="cube-outline"></ion-icon> PostgreSQL<br></br>
                            others :  <ion-icon name="logo-python"></ion-icon> Python  <ion-icon name="paw-outline"></ion-icon> Pandas 
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