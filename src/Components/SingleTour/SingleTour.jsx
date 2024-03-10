/* eslint-disable react/prop-types */

import styles from "./SingleTour.module.css";
import { TiStarFullOutline } from "react-icons/ti";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const SingleTour = ({
  tour: { title, country, price, stayingtime, image, discount, rating, _id },
}) => {
  console.log(title, country, price, stayingtime, discount, rating, _id);
  return (
    <div className={styles.single_tour}>
      <div className={styles.singletour_image_area}>
        <img src={image} alt="Tour" />
        <div className={styles.package_rating}>
          <span>
            <TiStarFullOutline />
          </span>
          <small>{rating}</small>
        </div>
      </div>

      <div className={styles.tour_package_details}>
        <p>{country}</p>
        <h3>{title}</h3>
        <h4>From <span>{price}</span></h4>
        <h5>{stayingtime}</h5>
        <NavLink to={`/tourlist/${_id}`}>Explore more <span><BsArrowRight /></span></NavLink>
      </div>
    </div>
  );
};

export default SingleTour;
