import styles from "./TourListSearchbar.module.css";

const TourListSearchbar = () => {
  return (
    <div className={styles.searchbar_wrapper}>
      <h3>Search Tour</h3>
      <div className={styles.search_filter}>
        <label>
          <select name="destination" id="destination">
            <option value="select">Select Destination</option>
            <option value="asia">Asia</option>
            <option value="america">America</option>
            <option value="africa">Africa</option>
            <option value="europe">Europe</option>
          </select>
        </label>
        <label>
          <select name="category" id="category">
            <option value="category">Travel Category</option>
            <option value="advanture">Advanture Travel</option>
            <option value="air">Air Travel</option>
            <option value="backpack">BackPacking</option>
            <option value="bleisure">Bleisure Travel</option>
          </select>
        </label>

        <label>
          <select name="guest" id="guest">
            <option value="guest">How many guest</option>
            <option value="1/2">1 child 2 adult</option>
            <option value="2/2">2 child 2 adult</option>
            <option value="1/3">1 child 3 adult</option>
            <option value="2/3">2 child 3 adult</option>
          </select>
        </label>
      </div>

      <button>Find Now</button>
    </div>
  );
};

export default TourListSearchbar;
