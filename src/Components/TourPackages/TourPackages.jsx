import { useEffect, useState } from 'react'
import styles from './TourPackages.module.css'
import SingleTour from '../SingleTour/SingleTour'



const TourPackages = () => {

    const [tours, setTours] = useState([])
    

    useEffect(() => {
        fetch('http://localhost:3000/hotels')
        .then(res => res.json())
        .then(data => setTours(data))
    }, [])


  return (
    <div>

        <div className={styles.tour_package_top_area}>
            <div className={styles.headings}>
                <h3>Tour Packages</h3>
                <h2>Featured Tours</h2>
            </div>
            <div className={styles.tour_package_top_btns}>

            </div>
        </div>

        <div className={styles.tour_packages_container}>
            {

                tours.slice(0,8).map(tour => <SingleTour key={tour.id} tour={tour}/>)
            }
        </div>

    </div>

  )
}

export default TourPackages