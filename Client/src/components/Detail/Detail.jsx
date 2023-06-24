import styles from './Detail.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Detail () {

    const { id } = useParams()
    const [ character, setCharacter ] = useState({})

    useEffect(() => {
        // url api: `https://rickandmortyapi.com/api/character/${id}`
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);

    return (
            <div className={styles.detail}>
                <div className={styles.bigContainer}>
                    <h1 className={styles.name}>{character?.name}</h1>
                    <div className={styles.status}><h3>Status:<br></br>{character?.status}</h3></div>
                    <div className={styles.species}><h3>Species:<br></br>{character?.species}</h3></div>
                    <div className={styles.gender}><h3>Gender:<br></br>{character?.gender}</h3></div>
                    <div className={styles.origin}><h3>Origin:<br></br>{character?.origin?.name}</h3></div>
                    <div className={styles.photo} style={{background: `url(${character.image}) no-repeat`}}></div>
                    <div className={styles.action}>
                        <span>Act now!</span>
                        <button>Action</button>
                    </div>
                </div>
            </div>
    )
}