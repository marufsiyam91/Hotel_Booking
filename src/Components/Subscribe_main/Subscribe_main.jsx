import { FaArrowRightLong } from "react-icons/fa6";
import styles from "./Subscribe_main.module.css";

const Subscribe_main = () => {
  return (
    <div className={styles.subscribe_main_container}>
      <div className={styles.subscribe_wrapper}>
        <div className={styles.subscribe_content}>
          <img
            src={
              "https://azim.hostlin.com/Travic/assets/images/shape/shape-16.png"
            }
            alt="subscribe_leaf"
          />
          <h2>Subscribe for latest update</h2>
          <h2>about Travelling</h2>

          <div className={styles.subscribe_info_provider}>
            <input type="email" name="email" placeholder="Email Address*" />
            <button className={styles.subscribe_btn}>
              Subscribe
              <span className={styles.subscribe_flex}>
                {" "}
                <FaArrowRightLong />
              </span>
            </button>
          </div>

          <img
            className={styles.subscribe_overlay_image}
            src={
              "https://azim.hostlin.com/Travic/assets/images/shape/shape-17.png"
            }
            alt=""
          />
        </div>

        <div className={styles.subscribe_parashoot_image_wrapper}>
          <img
            src={
              "https://azim.hostlin.com/Travic/assets/images/background/subscribe-bg-2.png"
            }
            alt="subscribe_parashoot"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe_main;
