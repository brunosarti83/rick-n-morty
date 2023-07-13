// estilos
import styles from './SignIn.module.css';
// hooks y helpers
import { useState } from 'react';
import { validator } from '../../helpers/validation';

export default function SignIn(props) {

    const { signIn } = props

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        confirm: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirm: ''
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setUserData({ ...userData, [property]: value })
        setErrors(validator({ ...userData, [property]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!errors.email && !errors.password && !errors.confirm) {
            signIn(userData)
        } else {
            window.alert('Review your info')
        }
    }

    return (
        <div className={styles.holePage}>
            <div className={styles.formWrapper}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className={styles.formLabel} htmlFor='email'>E-mail:</label>
                        <input className={styles.formInput} name='email' type='text' value={userData.email} onChange={handleChange} />
                        <span className={styles.errors}>{errors.email}</span>
                    </div>
                    <div>
                        <label className={styles.formLabel} htmlFor='password'>Password:</label>
                        <input className={styles.formInput} name='password' type='password' value={userData.password} onChange={handleChange} />
                        <span className={styles.errors}>{errors.password}</span>
                    </div>
                    <div>
                        <label className={styles.formLabel} htmlFor='confirm'>Confirm Password:</label>
                        <input className={styles.formInput} name='confirm' type='password' value={userData.confirm} onChange={handleChange} />
                        <span className={styles.errors}>{errors.confirm}</span>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                <a className={styles.haveAcc} href='/'><span>I already have an account</span></a>
            </div>
        </div>
    )
}