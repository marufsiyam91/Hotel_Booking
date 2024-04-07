import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../config/Firebase";


const Login = () => {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
  }


  return (
    <div className="container">
          <button onClick={handleGoogleSignin}>Login with google</button>
    </div>
  )
}

export default Login
