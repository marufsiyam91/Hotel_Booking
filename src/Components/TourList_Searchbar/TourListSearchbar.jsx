import { useState } from "react";
import styles from "./TourListSearchbar.module.css";

const TourListSearchbar = ({handleClick, handleChange}) => {

  const [sortingOptions, setSortingOptions] = useState([]);


  const handleSort = (e) => {
    const selectedOption = e.target.value;
    // Clear previous selection or add new one
    if (selectedOption === "select" ) {
      setSortingOptions([]);
    } else {
      setSortingOptions([selectedOption]); // Assuming single selection for sorting
    }
  };

  return (
    <div className={styles.searchbar_wrapper}>
      <h3>Search Tour</h3>
      <div className={styles.search_filter}>
        <input type="text" name="country" placeholder="search for country" onChange={handleChange} />
        <label>
          <select name="destination" id="destination" onChange={handleSort}>
            <option value="select">Select Destination</option>
            <option value="asia">Asia</option>
            <option value="america">America</option>
            <option value="africa">Africa</option>
            <option value="europe">Europe</option>
          </select>
        </label>
        <label>
          <select name="category" id="category" onChange={handleSort}>
            <option value="select">Travel Category</option>
            <option value="advanture">Advanture Travel</option>
            <option value="air">Air Travel</option>
            <option value="hill climbing">Hill Climbing</option>
            <option value="diving">Diving</option>
          </select>
        </label>

        <label>
          <select name="guest" id="guest">
            <option value="select">How many guest</option>
            <option value="1/2">1 child 2 adult</option>
            <option value="2/2">2 child 2 adult</option>
            <option value="1/3">1 child 3 adult</option>
            <option value="2/3">2 child 3 adult</option>
          </select>
        </label>
      </div>

      <button onClick={() => handleClick({ sortingOptions })} >Find Now</button>
    </div>
  );
};

export default TourListSearchbar;
