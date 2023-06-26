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
    const [genders, setGenders] = useState([])
    const [statuses, setStatuses] = useState([])
    const [specieses, setSpecieses] = useState([])
    const [filterObj, setFilterObj] = useState({
        order: "Added",
        status: "All",
        species: "All",
        gender: "All"
    })

    useEffect(() => {
        const currentGenders = []
        const currentStatuses = []
        const currentSpecieses = []
        myFavorites.forEach(char => {
            if (!currentGenders.includes(char.gender)) {
                currentGenders.push(char.gender)
            }
            if (!currentStatuses.includes(char.status)) {
                currentStatuses.push(char.status)
            }
            if (!currentSpecieses.includes(char.species)) {
                currentSpecieses.push(char.species)
            }
        })
        setGenders(currentGenders)
        setStatuses(currentStatuses)
        setSpecieses(currentSpecieses)
    }, [myFavorites])

    useEffect(() => {
        dispatch(actions.filterCards(filterObj))
    },[filterObj])

    // const handleOrder = (event) => {
    //     dispatch(actions.orderCards(event.target.value))
    //     setAux(!aux)
    // }
    const handleFilter = (event) => {
        const field = event.target.name
        const value = event.target.value
        setFilterObj({...filterObj, [field]: value})
    }
    
    
    return (
        <div className={styles.favorites}>
            <div className={styles.filters}>
                <label htmlFor="order" id='orderLab' className={styles.orderLab}>Order: </label>
                <select name="order" id="order" className={styles.order} value={filterObj.order} onChange={handleFilter}>
                    <option value="Added">-Added-</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <label htmlFor="status" id='statusLab' className={styles.statusLab}>Status: </label>
                <select name="status" id="status" className={styles.status} value={filterObj.status} onChange={handleFilter}>
                    <option value="All">-All-</option>
                    {statuses.map((status, i) => {
                        return <option value={status} key={i}>{status}</option>
                    })}
                </select>
                <label htmlFor="species" id='speciesLab' className={styles.speciesLab}>Species: </label>
                <select name="species" id="species" className={styles.species} value={filterObj.species} onChange={handleFilter}>
                    <option value="All">-All-</option>
                    {specieses.map((species, i) => {
                        return <option value={species} key={i}>{species}</option>
                    })}
                </select>
                <label htmlFor="gender" id='genderLab' className={styles.genderLab}>Gender: </label>
                <select name="gender" id="gender" className={styles.gender} value={filterObj.gender} onChange={handleFilter}>
                    <option value="All">-All-</option>
                    {genders.map((gender, i) => {
                        return <option value={gender} key={i}>{gender}</option>
                    })}
                </select>
            </div>
            <Cards characters={myFavorites} onClose=''/>
            <BigFoot />
        </div>
    )
}

