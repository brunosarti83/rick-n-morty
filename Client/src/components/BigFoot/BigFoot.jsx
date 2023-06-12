import styles from './BigFoot.module.css';

export default function BigFoot (props) {

    return (
        <div className={styles.footContainer}>
            <img className={styles.image} src={require('../../images/bottom.jpg')} alt=''></img>
        </div>
    )
}