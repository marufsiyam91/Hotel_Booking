import styles from "./TourList.module.css";
import { useEffect, useState } from "react";
import PageTop from "../../Components/PageTop/PageTop";
// import { useEffect } from "react";
import SingleTourList from "../../Components/SingleTourList/SingleTourList";
import TourListSearchbar from "../../Components/TourList_Searchbar/TourListSearchbar";
import TourlistLoader from "../../Components/TourlistLoader";

const TourList = () => {
  const [tours, setTours] = useState([]);
  const [country, setCountry] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://travelbooking-2ufk.onrender.com/pagenatedTours?page=${currentPage}&pageSize${pageSize}`
    )
      .then((res) => res.json())
      .then((data) => setTours(data.tours));
    setIsLoading(false);

  }, [currentPage, pageSize, country]);

  const fetchTours = async (sortBy, sortingOptions) => {
    // ... existing code for fetching tours
  
    const urlParams = new URLSearchParams({
      region: sortBy, // Assuming sorting by region for now
      // Add sorting parameters here based on sortingOptions array
      sort: sortingOptions.join(","), // Comma-separated sorting criteria
    });
  
    const response = await fetch(`https://localhost:3000/tours?${urlParams.toString()}`);
    // ... rest of the code
    const data = await response.json();
    setTours(data)
  };

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true); // Set loading to true when starting fetch
    fetch(
      `https://travelbooking-2ufk.onrender.com/pagenatedTours?page=${currentPage}&pageSize=${pageSize}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTours(data.tours);
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Make sure loading is set to false even in case of an error
      });
  }, [currentPage, pageSize, country]);
  

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
          <TourListSearchbar
            handleClick={fetchTours}
            handleChange={handleChange}
          />

          {isLoading ? (
            <div className="flex flex-col gap-6 w-full">
              <TourlistLoader/>
              <TourlistLoader/>
              <TourlistLoader/>
              <TourlistLoader/>
              <TourlistLoader/>
              <TourlistLoader/>
              
            </div>
          ) : (
            <div className={styles.tour_list_showcase_area}>
              {tours.map((tour) => (
                <SingleTourList key={tour.id} tour={tour} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.pagination_controls}>
        <button
          onClick={() => setCurrentPage((prevState) => prevState - 1)}
          disabled={currentPage === 3}
        >
          Previous
        </button>
        <span>Page: {currentPage}</span>
        <button
          onClick={() => setCurrentPage((prevState) => prevState + 1)}
          disabled={currentPage === 3}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TourList;