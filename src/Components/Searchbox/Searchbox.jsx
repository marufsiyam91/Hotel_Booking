import styles from "./Searchbox.module.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useContext, useState } from "react";
import { DateRange } from "react-date-range";
import { CiMap } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { GoPeople } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Searchbox = () => {
  const [showCalender, setShowCalender] = useState(false);


  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  //calender show or not show handler

  const handleShowCalender = () => {
    setShowCalender((prevstate) => !prevstate);
  };

  return (
    <div className={styles.searchbox_container}>
      <div className={styles.searchbox_wrapper}>
        <div className={styles.row_wrapper}>
      <div className={styles.searchbox_first_row}>
      <label className={styles.left_border}>
        <span>
          <CiMap />
          <input
            type="text"
            name="destination"
            placeholder="Your destination"
          />
        </span>
          <MdOutlineKeyboardArrowDown />
        </label>

        <label>
          <span>
          <BiCategory />
          <input
            type="text"
            name="travel_category"
            placeholder="Travel category"
          />
          </span>
          <MdOutlineKeyboardArrowDown />
        </label>
      </div>
        
      <div className={styles.searchbox_second_row}>
        <label>
          <span>
          <GoPeople />
          <input type="number" name="guest" placeholder="Guests number" />
          </span>
          <MdOutlineKeyboardArrowDown />
        </label>

        <button onClick={handleShowCalender} className={styles.calender_btn}>
          <span className={styles.calender_flex}>
            <span className={styles.calender_icon}>
              <CiCalendar />
            </span>{" "}
            When to start
          </span>
          <MdOutlineKeyboardArrowDown />
        </button>
        </div>
        </div>
        <button className={styles.find_now_btn}>Find Now</button>
        {showCalender && (
          <span className={styles.date_calender}>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default Searchbox;
