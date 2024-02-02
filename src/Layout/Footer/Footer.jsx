import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_compo_container}>
      <div className={styles.footer_container}>
        <div className={styles.footer_wrapper}>
          <div className={styles.footer_contact_info}>
            <img
              src={"https://azim.hostlin.com/Travic/assets/images/logo-2.png"}
              alt="Travik"
            />
            <h5>
              A wonderful serenity has taken possession <br /> of my entire
              soul, like these sweet morning <br /> of spring which
            </h5>
            <h3>Travikinfo@support.com</h3>
            <h3>(+55) 123-456-7890</h3>
          </div>

          <div className={styles.footer_links}>
            <div className={styles.footer_about_links}>
              <h3>About</h3>
              <p>About Company</p>
              <p>Contact us</p>
              <p>Become Host</p>
              <p>Associations</p>
              <p>Media News</p>
              <p>Travel Guide</p>
            </div>

            <div className={styles.top_cities_links}>
              <h3>Top Cities</h3>
              <p>London</p>
              <p>Dubai</p>
              <p>California</p>
              <p>Tokyo</p>
              <p>Las Vegas</p>
              <p>New York City</p>
            </div>

            <div className={styles.top_countries_link}>
              <h3>Top Countries</h3>
              <p>United State</p>
              <p>Belgium</p>
              <p>Germany</p>
              <p>United Kingdom</p>
              <p>Mexico</p>
              <p>Argentina</p>
            </div>
          </div>
        </div>

        <div className={styles.footer_copyright_area}>
          <hr />
          <div className={styles.copyright_wrapper}>
            <h4>
              Copyright © 2023 <NavLink to={"/"}>Travic,</NavLink> Inc. All
              Rights Reserved
            </h4>

            <div className={styles.social_links}>
              <div>
                <FaFacebookF />
              </div>
              <div>
                <BsTwitterX />
              </div>
              <div>
                <FaLinkedin />
              </div>
              <div>
                <FaDiscord />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
