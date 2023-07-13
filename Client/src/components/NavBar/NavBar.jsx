// import styles
import styles from './NavBar.module.css';
// import hooks
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// import helpers
import { ROUTES } from '../../helpers/ROUTES';
// import actions
import { logOut } from '../../redux/actions';

export default function NavBar() {

    const user = useSelector((state) => state.user)
    const [showMenu, setShowMenu] = useState(false)
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        setShowMenu(false)
    },[location])

    const handleMenu = (event) => {
        setShowMenu(!showMenu)
    }

    const handleLogOut = () => {
        dispatch(logOut())
    }

    return (
        <div className={styles.navBar}>
            <div className={showMenu ? styles.hiddenDiv : styles.notShowing} onClick={handleMenu}></div>
            <div className={styles.logoUsefull} onClick={handleMenu}></div>
            <div className={!showMenu ? styles.navDiv : styles.navDivAlt}>
                <ul className={styles.list}>
                    <NavLink to={ROUTES.home} className={({ isActive }) => isActive ? styles.activeLink : styles.pendingLink}>
                        <li>
                            <div className={styles.liWrap}>
                                <div className={styles.marker}><span>HOME</span></div>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to={ROUTES.about} className={({ isActive }) => isActive ? styles.activeLink : styles.pendingLink}>
                        <li>
                            <div className={styles.liWrap}>
                                <div className={styles.marker}><span>ABOUT</span></div>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to={ROUTES.favorites} className={({ isActive }) => isActive ? styles.activeLink : styles.pendingLink}>
                        <li>
                            <div className={styles.liWrap}>
                                <div className={styles.marker}><span>FAVORITES</span></div>
                            </div>
                        </li>
                    </NavLink>
                    <li>
                        <div className={styles.liWrap}>
                            <span className={styles.user}>{user.email}</span>
                        </div>
                    </li>
                    <NavLink to={ROUTES.landing} className={styles.logout}>
                        <li>
                            <div className={styles.liWrap} onClick={handleLogOut}>
                                <div className={styles.marker}><span>LOG OUT</span></div>
                            </div>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

