import ContactInfoCard from '../ContactInfoCard/ContactInfoCard'
import styles from './ContactDetail.module.css'
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";

const ContactDetail = () => {
  return (
    <div className={styles.contact_detail_container}>
        <h2>Contact Details</h2>
        <h1>Contact Information</h1>

        <ContactInfoCard img={<CiLocationOn />} title1={'1901 Thornridge Cir. Shiloh,'} title2={'Hawaii 81063'} heading={'Our Location'}/>
        <ContactInfoCard img={<TfiEmail />} title1={'contact@example.com'} title2={'support@example.com'} heading={'Email Address'}/>
        <ContactInfoCard img={<FiPhoneCall />} title1={'Emergency Cases'} title2={'+(208) 555-0112 (24/7)'} heading={'Phone Number'}/>
    </div>
  )
}

export default ContactDetail