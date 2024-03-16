import styles from "./SingleTourList.module.css";
import { GiRoundStar } from "react-icons/gi";
import { MdOutlineStarHalf } from "react-icons/md";
import { SlPhone } from "react-icons/sl";
import { CiLocationArrow1 } from "react-icons/ci";


// eslint-disable-next-line react/prop-types
const SingleTourList = ({
  tour: {
    image,
    title,
    country,
    region,
    price,
    stayingtime,
    rating,
    discount,
    description,
    reviewCount,
  },
}) => {
  return (
    <div className={styles.single_tourlist_container}>
      <div className={styles.single_tourlist_wrapper}>
        <div className={styles.single_tourlist_image_area}>
          <span></span>
          <img src={image} alt="tour" />
          <div className={styles.tourist_list_offer}>
            <p className={styles.featured_package}>
              <GiRoundStar /> Featured
            </p>
            <p className={styles.package_off}>
              {discount} off {price}: eblwc{" "}
            </p>
          </div>
        </div>

        <div className={styles.single_tourlist_detail}>
          <p>
            <MdOutlineStarHalf />({rating}){" "}
            <span>
              {reviewCount} <small>reviews</small>
            </span>
          </p>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <div className={styles.contact}>
            <h4>
              <span><SlPhone /></span> (123)456-7890
            </h4>
            <h4>
            <span><CiLocationArrow1 /></span>
              {country}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTourList;
