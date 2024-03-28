import styles from "./TourList.module.css";
import { useEffect, useState } from "react";
import PageTop from "../../Components/PageTop/PageTop";
// import { useEffect } from "react";
import SingleTourList from "../../Components/SingleTourList/SingleTourList";
import TourListSearchbar from "../../Components/TourList_Searchbar/TourListSearchbar";

const TourList = () => {
  const [tours, setTours] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6)

  useEffect(() => {
    fetch(`https://travelbooking-2ufk.onrender.com/tours?page=${currentPage}&pageSize${pageSize}`)
    .then((res) => res.json())
    .then((data) => setTours(data.tours)); 
}, [currentPage, pageSize]);

    const fetchTours = async (sortBy) => {
      const response = await fetch(`https://travelbooking-2ufk.onrender.com/tours?region=${sortBy}`);
      const data = await response.json();
      setTours(data); 
    };


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

      <div className={styles.serachbar_tourlist_container}>
        <div className={styles.Searchbar_tourlist_wrapper}>
          <TourListSearchbar handleClick={fetchTours}/>

          <div className={styles.tour_list_showcase_area}>
            {tours.map((tour) => (
              <SingleTourList key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.pagination_controls}>
        <button style={{display: currentPage === 1 ? 'none' : 'block'}} onClick={() => setCurrentPage((prevState) => prevState - 1)}  >
          Previous
        </button>
        <span>Current Page: {currentPage}</span>
        <button style={{display: currentPage === 3 ? 'none' : 'block'}} onClick={() => setCurrentPage((prevState) => prevState + 1)} >
          Next
        </button>
      </div>
    </div>
  );
};

export default TourList;
