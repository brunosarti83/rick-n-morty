// import styles
import styles from './NavBar.module.css';
// import hooks
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import helpers
import { ROUTES } from '../../helpers/ROUTES';

export default function NavBar() {

    const user = useSelector((state) => state.user)

    return (
        <div className={styles.navDiv}>
            <ul className={styles.list}>
                <NavLink to={ROUTES.home} className={({ isActive }) => isActive ? styles.activeLink : styles.pendingLink}>
                    <li>
                        <div className={styles.liWrap}>
                            <div className={styles.marker}><span>Home</span></div>
                        </div>
                    </li>
                </NavLink>
                <NavLink to={ROUTES.about} className={({ isActive }) => isActive ? styles.activeLink : styles.pendingLink}>
                    <li>
                        <div className={styles.liWrap}>
                            <div className={styles.marker}><span>About</span></div>
                        </div>
                    </li>
                </NavLink>
                <NavLink to={ROUTES.favorites} className={({ isActive }) => isActive ? styles.activeLink : styles.pendingLink}>
                    <li>
                        <div className={styles.liWrap}>
                            <div className={styles.marker}><span>Favorites</span></div>
                        </div>
                    </li>
                </NavLink>
            </ul>
            <div className={styles.userSection}>
                <span className={styles.user}>{user}</span>
                <NavLink to={ROUTES.landing} className={styles.logout}>
                    <span>Log out</span>
                </NavLink>
            </div>
        </div>
    )
}

