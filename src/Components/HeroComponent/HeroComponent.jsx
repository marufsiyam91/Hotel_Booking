import styles from "./HeroComponent.module.css";


const HeroComponent = () => {

  return (
    <div className={styles.home_component}>
      <div className={styles.homepage_wrapper}>
        <h3>Discover the planet</h3>
        <h1>Creating memories that last...</h1>
        <h4>
          This statistic is based on our average personal current account online
        </h4>
      </div>
    </div>
  );
};

export default HeroComponent;