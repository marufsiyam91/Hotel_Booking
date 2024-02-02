/* eslint-disable react/prop-types */

import styles from './SingleTour.module.css'
import { TiStarFullOutline } from "react-icons/ti";

const SingleTour = ({tour: {title, country, price, stayingtime, image, discount, rating}}) => {

    console.log(title, country, price, stayingtime,  discount, rating)
  return (
    <div className={styles.single_tour}>
        <div className={styles.singletour_image_area}>
            <img src={image} alt="Tour" />
            <div className={styles.package_rating}>
                <span><TiStarFullOutline /></span>
                <small>{rating}</small>
            </div>
        </div>

        <p>{country}</p>
        <h3>{title}</h3>
        <h4>{price}</h4>
        <p>{stayingtime}</p>
        <button>Explore more</button>


    </div>
  )
}

export default SingleTour