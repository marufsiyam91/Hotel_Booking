import styles from './Login.module.css'
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../../config/Firebase";
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TourContext } from '../../Context/TourContext';

const Login = () => {

  const notify = () => toast("Signed in successfully!");
  const errorNotify = () => toast("Wrong email or password!");
  const navigate = useNavigate()
  const {dispatch} = useContext(TourContext)

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })


  const handleLogin = (e) =>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, userData.email, userData.password)
    .then(userCredintial => {
      const user = userCredintial.user
      console.log(user)
      setUserData({...userData,
        email: '',
        password: ''
      })
      navigate('/')
      notify()
      dispatch({type: 'isUser'})
    })
    .catch(error => {
      console.log(error)
      setUserData({
        email: '',
        password: ''
      })
      errorNotify()
    })
  }

  const provider = new GoogleAuthProvider();
  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
  }

  return (
    <div className={styles.container}>
      <div className={styles.login_form_wrapper}>

      <form  className={styles.login_form}>
        <h2>Weclome Back! Please</h2>
        <h2>
          <span>Sign in</span> to continue.
        </h2>
        <p>
          Unlock a world of exclusive content, enjoy special offers, and be the
          first to dive into exciting news and updates by joining our community!
        </p>
        <button
          type="button"
          className={styles.google_signup_btn}
          onClick={handleGoogleSignin}
        >
          <FcGoogle style={{ fontSize: "2rem" }} />
          <span>Continue with Google</span>
        </button>

        <div className={styles.input_boxes}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setUserData({...userData, email: e.target.value})}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setUserData({...userData, password: e.target.value})}
          />
        </div>
        <button onClick={handleLogin} className={styles.rigister_btn}>Login</button>

        <ToastContainer />

        <p>
          don't have an account? <NavLink style={{textDecoration: 'underline', color: '#1976D2'}} to={"/signup"}>Sign up</NavLink>
        </p>
      </form>
      </div>
    </div>
  );
};

export default Login;
