// import { useLoaderData } from "react-router-dom"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineStarHalf } from "react-icons/md";
import styles from "./SingleTourPackage.module.css";
import { CiLocationOn } from "react-icons/ci";

const SingleTourPackage = () => {
  const [tourData, setTourData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchTourData = async () => {
      const tourId = id;
      const response = await fetch(`https://travelbooking-2ufk.onrender.com/tours/${tourId}`);
      const data = await response.json();
      setTourData(data);
      setIsLoading(false);
    };

    fetchTourData();
  }, []);

  console.log(tourData);

  return (
    <div className={styles.single_tourdetail_wrapper}>
      {!isLoading && (
        <div className={styles.single_tourdetail}>
          <div className={styles.tourlist_images}>
            <div>
              <img src={tourData.TouristPlaces[0]} alt={tourData.country} />
            </div>
            <div className={styles.tourlist_block_image}>
              <img src={tourData.TouristPlaces[1]} alt={tourData.country} />
              <img src={tourData.TouristPlaces[2]} alt={tourData.country} />
            </div>
          </div>
          <div className={styles.tourlist_details}>
            <div className={styles.tour_country_review}>
              <p>
                <CiLocationOn /> <span>{tourData.country}</span>
              </p>
              <p>
                <MdOutlineStarHalf />({tourData.rating}){" "}
                <span>
                  {tourData.reviewCount} <small>reviews</small>
                </span>
              </p>
            </div>
            <h2>{tourData.title}</h2>
          </div>

          <div className={styles.more_tour_detail}>
            <div className={styles.about_tour}>
              <h3>About this Tour</h3>
              <p>
                {tourData.description}the world’s largest of lizards in their
                natural environment. islands of the Komodo National Park.
                Although Ulta and Sephora offer many of the same brands and
                products – Sephora's offering is priced significantly higher
                than Ulta's. On average, the makeup at Sephora is 65% more
                expensive, the category with the lowest percent change. Skincare
                and haircare are 100% and 104% more expensive, respectively.`
              </p>
            </div>
            <div className={styles.included_excluded}>
              <h3>Included and Excluded</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleTourPackage;
