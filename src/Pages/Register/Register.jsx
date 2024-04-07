import { NavLink } from 'react-router-dom';
import styles from './Register.module.css';
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import FormValidation from './Formvalidation'; // Assuming Formvalidation component is in a separate file
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/Firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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




  const notify = () => toast("Signed up successfully!");



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
      notify()
      setData({
        ...data,
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
      })
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  };


  
  return (
    <div style={{ margin: '0 auto', maxWidth: '1280px'}} className="container">
      <div className={styles.form_wrapper}>
        <form onSubmit={handleSubmit} className={styles.register_form}>

          <h2>Weclome Back! Please</h2>
          <h2><span>Sign up</span> to continue.</h2>
          <p>Unlock a world of exclusive content, enjoy special offers, and be the first to dive into exciting news and updates by joining our community!</p>
          <button type='button' onClick={handleGoogleSingup} className={styles.google_signup_btn}>
            <span className={styles.flex_register_google}>
              <span className={styles.google_icon}><FcGoogle /></span>
              Continue with Google
            </span>
          </button> 
          
          <ToastContainer />

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

