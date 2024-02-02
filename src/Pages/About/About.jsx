import About_us_info from '../../Components/About_us_info/About_us_info'
import Choose_travic_area from '../../Components/Choose_Travic/Choose_Travic.jsx'
import styles from './About.module.css'

const About = () => {
  return (
    <div className="container">
          <div className={styles.about_top_part}>
            <h2>about us</h2>
            <h1>About us</h1>
          </div>

          <div className={styles.about_us_info_area}>
            <About_us_info/>
          </div>

          <div className={styles.choose_travic_area}>
            <Choose_travic_area/>
          </div>
    </div> 
  )
}

export default About
