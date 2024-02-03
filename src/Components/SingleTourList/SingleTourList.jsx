import styles from "./SingleTourList.module.css";

// eslint-disable-next-line react/prop-types
const SingleTourList = ({
  tour: { image, title, country, region, price, stayingtime, rating, discount },
}) => {
  return (
    <div className={styles.single_tourlist_container}>
      <div className={styles.single_tourlist_wrapper}>
        <div className={styles.single_tourlist_image_area}>
          <img src={image} alt="tour" />
          <span>{rating}</span>
          <span>{discount}</span>
        </div>

        <div className={styles.single_tourlist_detail}>
            <h3>{country}</h3>
            <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleTourList;
