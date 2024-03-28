import { useEffect, useState } from "react";
import styles from "./TourPackages.module.css";
import SingleTour from "../SingleTour/SingleTour";
import FeaturedSortBtn from "../FeaturedSortBtn/FeaturedSortBtn";

const TourPackages = () => {
  const [tours, setTours] = useState([]);
  const [state, setState] = useState('ASIA')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://travelbooking-2ufk.onrender.com/tours')
    .then(res => res.json())
    .then(data => setTours(data))
    setIsLoading(false)
  }, [])

  console.log(tours)


  const handleClick = (filter) => {
    setState(filter)
  }

  return (
    <div className={styles.Tour_compo_container}>
      <div className={styles.Tour_compo_content}>
        <div className={styles.tour_compo_width}>
        <div className={styles.tour_package_top_area}>
          <div className={styles.headings}>
            <h3>Tour Packages</h3>
            <h2>Featured Tours</h2>
          </div>
          <div className={styles.tour_package_top_btns}>
            <FeaturedSortBtn isColored={state} onClick={() => handleClick('ASIA')}>ASIA</FeaturedSortBtn>
            <FeaturedSortBtn isColored={state} onClick={() => handleClick('AMERICA')}>AMERICA</FeaturedSortBtn>
            <FeaturedSortBtn isColored={state} onClick={() => handleClick('AFRICA')}>AFRICA</FeaturedSortBtn>
            <FeaturedSortBtn isColored={state} onClick={() => handleClick('EUROPE')}>EUROPE</FeaturedSortBtn>
          </div>
        </div>
      {
        !isLoading &&
        <div className={styles.tour_packages_container}>
          {tours.filter(tour => tour.region === state).map((tour) => (
            <SingleTour key={tour.id} tour={tour} />
          ))}
        </div>
      }
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
