// estilos
import styles from './Form.module.css';
// hooks y helpers
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validator } from '../../helpers/validation';


export default function Form(props) {

    const { login, guest } = props
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setUserData({ ...userData, [property]: value })
        setErrors(validator({ ...userData, [property]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    const handleGuest = () => {
        guest()
    }

    return (
        <div className={styles.holePage}>
            <div className={styles.formWrapper}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email'>E-mail:</label>
                        <input name='email' type='text' value={userData.email} onChange={handleChange} />
                        <span className={styles.errors}>{errors.email}</span>
                    </div>
                    <div>
                        <label htmlFor='password'>Password:</label>
                        <input name='password' type='password' value={userData.password} onChange={handleChange} />
                        <span className={styles.errors}>{errors.password}</span>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                    <button className={styles.guests} onClick={handleGuest}>or try it for FREE</button>
            </div>
        </div>
    )
}