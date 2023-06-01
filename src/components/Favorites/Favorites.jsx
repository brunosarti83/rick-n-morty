// import styles
import styles from './Favorites.module.css';
// import hooks
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import components
import Cards from '../Cards/Cards';
import BigFoot from '../BigFoot/BigFoot';

export default function Favorites(props) {

    const myFavorites = useSelector((state) => state.myFavorites)


    return (
        <div className={styles.favorites}>
            <Cards characters={myFavorites} onClose=''/>
            <BigFoot />
        </div>
    )
}