import { NavLink } from 'react-router-dom';
import styles from './Register.module.css';
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import FormValidation from './Formvalidation'; // Assuming Formvalidation component is in a separate file
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/Firebase";


const Register = () => {

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const [error, setError] = useState({});

  const handleChange = (e) => { // Corrected typo in function name
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };



  //firebase google signup
  const provider = new GoogleAuthProvider();

  const handleGoogleSingup = () => {
    signInWithPopup(auth, provider)
  }


  //firebase create user with email & password

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    const validation = FormValidation(data); // Assuming FormValidation handles validation
    setError(validation);
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  };



  return (
    <div className="container">
      <div className={styles.form_wrapper}>
        <form onSubmit={handleSubmit} className={styles.register_form}>
          <img src={'https://azim.hostlin.com/Travic/assets/images/logo.png'} alt="Travik" />

          <h2>WELCOME BACK</h2>
          <h4>Welcome to Travic Booking Community</h4>
          <button type='button' onClick={handleGoogleSingup} className={styles.google_signup_btn}>
            <span className={styles.flex_register_google}>
              <span className={styles.google_icon}><FcGoogle /></span>
              Continue with Google
            </span>
          </button> 

          <div className={styles.input_boxes}>
            <input
              onChange={handleChange}
              value={data.name}
              type="text"
              name="name"
              placeholder="Name"
            />
            {error.name && <p>{error.name}</p>}
            <input
              onChange={handleChange}
              value={data.email}
              type="email"
              name="email"
              placeholder="Email"
            />
            {error.email && <p>{error.email}</p>}
            <input
              onChange={handleChange}
              value={data.password}
              type="password"
              name="password"
              placeholder="Password"
            />
            {error.password && <p>{error.password}</p>}
            <input
              onChange={handleChange}
              value={data.confirmpassword}
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
            />
            {error.confirmpassword && <p>{error.confirmpassword}</p>}
          </div>
          <button className={styles.rigister_btn}>
            Register
          </button>

          <p>
            already have an account?{' '}
            <NavLink to={'/signin'}>Sign in</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

