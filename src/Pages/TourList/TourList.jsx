import styles from "./TourList.module.css";
import { useState } from "react";
import PageTop from "../../Components/PageTop/PageTop";
import { useEffect } from "react";
import SingleTourList from "../../Components/SingleTourList/SingleTourList";

const TourList = () => {

  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8800/hotels")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  return (
    <div className={styles.tour_list_container}>
        <div className={styles.tour_list_top_part}>
          <PageTop
            img={
              "https://azim.hostlin.com/Travic/assets/images/background/page-title-2.jpg"
            }
            title={"all tour"}
            heading={"Tour List"}
          />
        </div>

        <div className={styles.tour_list_showcase_area}>
          {tours.map((tour) => (
            <SingleTourList key={tour.id} tour={tour} />
          ))}
        </div>

    </div>
  );
};

export default TourList;
