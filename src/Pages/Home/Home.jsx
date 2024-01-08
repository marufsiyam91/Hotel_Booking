import styles from "./Home.module.css";
import HeroComponent from "../../Components/HeroComponent/HeroComponent";
import Searchbox from "../../Components/Searchbox/Searchbox";
import Subscribe_main from "../../Components/Subscribe_main/Subscribe_main";

const Home = () => {


  return (
    <div className="container">
      <div className={styles.hero_area_wrapper}>
        <HeroComponent/>
      </div>

      <div className={styles.hero_input_area}>
        <Searchbox/>
      </div>

      <div className={styles.Subscribe_area}>
          <Subscribe_main/>
      </div>
    </div>
  );
};

export default Home;
