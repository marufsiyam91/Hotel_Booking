import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
          <div className={styles.navbar_wrapper}>
               <div className={styles.logo_area}>
                    <h2>logo</h2>
               </div>

               <div className={styles.mainmenu}>
                    <ul>
                         <li><NavLink to={'/'}>Home</NavLink></li>
                         <li><NavLink to={'/'}>About</NavLink></li>
                         <li><NavLink to={'/'}>Contact</NavLink></li>
                    </ul>
               </div>
          </div>
    </div>
  )
}

export default Header
