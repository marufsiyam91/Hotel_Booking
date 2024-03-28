// import { useLoaderData } from "react-router-dom"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineStarHalf } from "react-icons/md";
import styles from "./SingleTourPackage.module.css";
import { CiLocationOn } from "react-icons/ci";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

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
            <div className={styles.included_excluded_wrapper}>
              <h3>Included and Excluded</h3>
              <div className={styles.included_excluded}>
              <div className={styles.included}>
                <p> <span><IoCheckmarkOutline /></span> Meal as per hotel Plan and drinks free too.</p>
                <p> <span><IoCheckmarkOutline /></span> Return airport and round trip transfers.</p>
                <p> <span><IoCheckmarkOutline /></span> Accommodation on twin sharing basis.</p>
                <p> <span><IoCheckmarkOutline /></span> The above rates are on per day disposal basis.</p>
                <p> <span><IoCheckmarkOutline /></span> Enjoy Brussels day tours. Overnight Brussels</p>
              </div>
              <div className={styles.excluded}>
                <p> <span><RxCross1 /></span> AC will not be functional on Hills or Slopes.</p>
                <p> <span><RxCross1 /></span> Any other service not mentioned</p>
                <p> <span><RxCross1 /></span> Additional entry fees other than specified</p>
                <p> <span><RxCross1 /></span> Amsterdam canal cruise not included for basic</p>
              </div>
              </div>
              <div className={styles.highlight_wrapper}>
                <h3>Top Highlights</h3>
                <p>Komodo Island is one of the only places in the world where you can spot Komodo Dragons the world’s largest of lizards in their natural environment. islands of the Komodo National Park.</p>
                <div className={styles.highlight}>
                  <p>Easily generate images with detailed text prompts</p>
                  <p>Customize your images with different styles, moods, colors</p>
                  <p>Generate high-quality images with up to 8K resolution</p>
                  <p>Customize your images with different styles, moods, colors</p>
                  <p>Generate high-quality images with up to 8K resolution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleTourPackage;
