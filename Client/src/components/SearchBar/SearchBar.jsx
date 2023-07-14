import styles from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar(props) {
   const { onSearch, clearAll } = props

   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const onClick = (id) => {
      onSearch(id)
      setId('')
   }

   const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         onClick(id)
      }
   }

   const onRandom = () => {
      const id = Math.ceil(Math.random() * 826)
      onClick(id)
   }

   const placeholder = '... search character NAME or ID'

   return (
      <div className={styles.searchbar}>
         <div className={styles.barWrapper}>
            <div className={styles.bar}>
               <input className={styles.inputSearch} type='search' onChange={handleChange} value={id} placeholder={placeholder} onKeyDown={handleKeyPress}/>
               <button className={styles.searchButton} onClick={() => { onClick(id) }}><ion-icon name="arrow-redo"></ion-icon></button>
               <button className={styles.randomButton} onClick={onRandom}>Random</button>
               <span className={styles.clearAll} onClick={clearAll}>Clear All</span>
            </div>
         </div>
      </div>
   );
}
