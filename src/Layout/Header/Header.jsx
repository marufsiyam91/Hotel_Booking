import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className='container'>
          <div className={styles.navbar_wrapper}>
               <div className={styles.logo_area}>
                    <img src={'https://azim.hostlin.com/Travic/assets/images/logo.png'} alt="Travik" />
               </div>

               <div className={styles.mainmenu}>
                    <ul>
                         <li><NavLink to={'/'}>Home</NavLink></li>
                         <li><NavLink to={'/about'}>About</NavLink></li>
                         <li><NavLink to={'/contact'}>Contact</NavLink></li>
                    </ul>
               </div>

               <div className={styles.signinup_btns}>
                    <NavLink to={'/signup'}><button>Register</button></NavLink>
                    <NavLink to={'/signin'}><button>Sign in</button></NavLink>
               </div>
          </div>
    </div>
  )
}

export default Header
