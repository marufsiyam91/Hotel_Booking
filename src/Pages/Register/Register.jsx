import { NavLink } from 'react-router-dom';
import styles from './Register.module.css'
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';

const Register = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  })

  const [error, setError] = useState(null)

  const handleChanger = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
  }




  return (
    <div className="container">
          <div className={styles.form_wrapper}>
              <form onSubmit={handleSubmit} className={styles.register_form}>
                <img src={'https://azim.hostlin.com/Travic/assets/images/logo.png'} alt="Travik" />

                    <h2>WELCOME BACK</h2>
                    <h4>Welcome to Travic Booking Community</h4>
                    <button className={styles.google_signup_btn}><span className={styles.flex_register_google}><span className={styles.google_icon}><FcGoogle /></span> Continue with Google</span></button>
                       

                      <div className={styles.input_boxes}>
                        <input onChange={handleChanger} type="text" name='name' placeholder='Name'/>
                        <input onChange={handleChanger} type="email" name='email' placeholder='Email'/>
                        <input onChange={handleChanger} type="password" name='password' placeholder='Password'/>
                        <input onChange={handleChanger} type="password" name='confirmpassword' placeholder='Confirm Password'/>
                      </div>
                       <button className={styles.rigister_btn}>Register</button>

                       <p>already have an account? <NavLink to={'/signin'}>sing in</NavLink></p>
              </form>
          </div>
    </div>
  )
}

export default Register
