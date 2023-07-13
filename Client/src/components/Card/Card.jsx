// import styles
import styles from './Card.module.css';
// import hooks
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
// import actions
import { addFav, removeFav } from '../../redux/actions';
// import helpers
import { ROUTES } from '../../helpers/ROUTES';

export default function Card(props) {
   // destructuring de props
   const { id, name, status, species, gender, origin, image, onClose } = props

   // hooks
   const [isFav, setIsFav] = useState(false)
   const dispatch = useDispatch()
   const location = useLocation()
   const myFavorites = useSelector((state) => (location.pathname === ROUTES.favorites) ? state.myFavorites : state.allCharacters)
   const userId = useSelector((state) => state.user.id)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id == id) {
            setIsFav(true)
         }
      })
   }, [myFavorites])

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         dispatch(removeFav(id,userId))
      } else {
         setIsFav(true)
         dispatch(addFav({ id, name, status, species, gender, origin, image, onClose, userId }))
      }
   }

   return (
      <div className={styles.cardDiv}>
         {
            isFav ? (
               <button className={styles.buttonFav} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.buttonFav} onClick={handleFavorite}>🖤</button>
            )
         }
         {
            location.pathname === ROUTES.home ? (
               <button className={styles.clsBtn} onClick={() => { onClose(id) }}>X</button>
            ) : null
         }
         <Link to={`/detail/${id}`} >
            <img className={styles.photo} src={image} alt='' />
         </Link>
         <div className={styles.description}>
            <h2 className={styles.characterName}>{name}</h2>
            <h2 className={styles.status}>Status: {status}</h2>
            <h2 className={styles.species}>Species: {species}</h2>
            <h2 className={styles.gender}>Gender: {gender}</h2>
            <h2 className={styles.origin}>Origin: {origin}</h2>
            <div className={styles.world}></div>
            <div className={styles.worldSmall}></div>
            <img className={styles.rocket} src={require('./rocket-launch.png')} alt="" />
         </div>
      </div>
   );
}
