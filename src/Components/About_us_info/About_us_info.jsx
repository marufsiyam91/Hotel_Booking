import styles from './About_us_info.module.css'
import { IoEarthOutline } from "react-icons/io5";
import { LuLayers } from "react-icons/lu";

const About_us_info = () => {
  return (
    <div className={styles.about_us_info_container}>
          <div className={styles.about_info_wrapper}>
               <div className={styles.about_info_contant_area}>
                    <h4>about us</h4>
                    <h2>Planning a trip should be very exciting adventure</h2>
                    <h5>We are dedicated to offering exceptional value for your travel investment. Our relationships with trusted travel partners</h5>

                    <div className={styles.about_international_tour_info}>
                        <div className={styles.tour_info_icon}>
                            <IoEarthOutline />
                        </div>
                        <div className={styles.tour_info_content}>
                            <h3>International Tours</h3>
                            <p>Our team of travel professional brings a wealth of knowledge and expertise to the table.</p>
                        </div>
                    </div>

                    <div className={styles.tour_option_info}>
                        <div className={styles.tour_options}>
                            <LuLayers />
                        </div>

                        <div className={styles.tour_option_content}>
                            <h3>Multiple Options to Choose</h3>
                            <p>OPlanning trip should be an exciting adventure, not stressful ordeal. Let us handle the logistics</p>
                        </div>
                    </div>
                    
               </div>

               <div className={styles.about_info_image_area}>
                  <div className={styles.image_one}><img src={'https://azim.hostlin.com/Travic/assets/images/resource/about-1.jpg'} alt="" /></div>
                  <div className={styles.image_two}><img src={'https://azim.hostlin.com/Travic/assets/images/resource/about-2.jpg'} alt="" /></div>
                  <div className={styles.image_three}><img src={'https://azim.hostlin.com/Travic/assets/images/resource/about-3.jpg'} alt="" /></div>
               </div>
          </div>
    </div>
  )
}

export default About_us_info
