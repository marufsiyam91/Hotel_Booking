import About_us_info from "../../Components/About_us_info/About_us_info";
import Choose_travic_area from "../../Components/Choose_Travic/Choose_Travic.jsx";
import PageTop from "../../Components/PageTop/PageTop.jsx";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className="">
      <div className={styles.aout_top_part_wrapper}>
        <PageTop
          img={
            "https://azim.hostlin.com/Travic/assets/images/background/page-title.jpg"
          }
          title={"about us"}
          heading={"About us"}
        />
      </div>

      <div className={styles.about_us_info_area}>
        <About_us_info />
      </div>

      <div className={styles.choose_travic_area}>
        <Choose_travic_area />
      </div>
    </div>
  );
};

export default About;
