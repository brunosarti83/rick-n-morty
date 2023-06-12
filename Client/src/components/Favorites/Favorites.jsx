// import styles
import styles from './Favorites.module.css';
// import hooks
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import components
import Cards from '../Cards/Cards';
import BigFoot from '../BigFoot/BigFoot';
// import actions
import * as actions from '../../redux/actions';

export default function Favorites(props) {

    const myFavorites = useSelector((state) => state.myFavorites)
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        dispatch(actions.orderCards(event.target.value))
        setAux(!aux)
    }
    const handleFilter = (event) => {
        dispatch(actions.filterCards(event.target.value))
    }

    return (
        <div className={styles.favorites}>
            <div className={styles.filters}>
                <label htmlFor="Order" id='orderLab' className={styles.orderLab}>Order: </label>
                <select name="Order" id="" className={styles.order} onChange={handleOrder}>
                    <option value="Added">-Added-</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <label htmlFor="Gender" id='genderLab' className={styles.genderLab}>Gender: </label>
                <select name="Gender" id="gender" className={styles.gender} onChange={handleFilter}>
                    <option value="All">-All-</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <Cards characters={myFavorites} onClose=''/>
            <BigFoot />
        </div>
    )
}