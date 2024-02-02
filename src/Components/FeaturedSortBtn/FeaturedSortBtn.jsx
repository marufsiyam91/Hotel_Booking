/* eslint-disable react/prop-types */
import styles from "./FeaturedSortBtn.module.css";

const FeaturedSortBtn = ({ children, onClick, isColored }) => {
  return (
    <div className={styles.featured_sort_btn_container}>
      <button
        style={{
          background: isColored === children && "#FF6B00",
          color: isColored === children && "#fff",
        }}
        className={styles.filter_tour_btn}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default FeaturedSortBtn;
