import styles from './'

const SearchFilterSidebar = () => {
  return (
    <div className={styles.search_sidebar_container}>
        <div className={styles.search_sidebar_wrapper}>
            <h3>Search</h3>
            <label htmlFor="destination">Destination</label>
            <input id='destination' type="text" placeholder='Your destination'/>

            <label htmlFor="Date">Check-in Date</label>
            <button>date here</button>

            
            
        </div>
    </div>
  )
}

export default SearchFilterSidebar