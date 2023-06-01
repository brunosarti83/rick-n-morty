import styles from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar(props) {
   const {onSearch} = props

   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const onClick = (id) => {
      onSearch(id)
      setId('')
   }

   const onRandom = () => {
      const id = Math.ceil(Math.random()*826)
      onClick(id)
   }

   return (
      <div className={styles.searchbar}>
         <div className={styles.barWrapper}>
            <div className={styles.bar}>
               <input className={styles.inputSearch} type='search' onChange={handleChange} value={id}/>
               <button className={styles.searchButton} onClick={()=>{onClick(id)}}>Add</button>
               <button className={styles.randomButton} onClick={onRandom}>Random</button>
            </div>
         </div>
      </div>
   );
}
