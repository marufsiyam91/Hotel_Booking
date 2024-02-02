/* eslint-disable react/prop-types */
import styles from './FeaturedSortBtn.module.css'


const FeaturedSortBtn = ({children, onClick}) => {
  return (
    <div className={styles.featured_sort_btn_container}>
        <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default FeaturedSortBtn