import styles from './Home.module.css';

import SearchBar from "../../components/SearchBar/SearchBar";
import Cards from "../../components/Cards/Cards";
import BigFoot from "../../components/BigFoot/BigFoot";

export default function Home (props) {

    const { characters, onSearch, onClose, clearAll } = props

    return (
        <div className={styles.home}>
            <SearchBar onSearch={onSearch} clearAll={clearAll} />
            <Cards characters={characters} onClose={onClose} />
            <BigFoot/>
        </div>
    )
}