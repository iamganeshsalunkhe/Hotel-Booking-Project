import styles from './Login.module.css'
import {Link,useNavigate} from 'react-router-dom'

function Login() {
    const navigate = useNavigate()

    return (
        <div className={styles.main}>
            <div className={styles.heading}>
                <h1>Welcome to Booking.com</h1>
            </div>

            <div>
                <label htmlFor="email">Email:     </label>
                <input type="email" id="email" name="email" required  />
            </div>
            <div>
                <label htmlFor="password"> Password: </label>
                <input type="password" id="password" name="password" required />
            </div>
            <div>
                    <button type='submit' id ='submit-btn' onClick={()=>{
                        
                    }}>Log In</button>
            </div>
            <div className={styles.signuplink}>
                <Link to='/Signin'>
                    <p>Don&apos;t have account? </p>
                </Link>
            </div>
        </div>
    )
}

export default Login
