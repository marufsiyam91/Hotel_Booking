import ContactInfoCard from '../ContactInfoCard/ContactInfoCard'
import styles from './ContactDetail.module.css'

const ContactDetail = () => {
  return (
    <div className={styles.contact_detail_container}>
        <h2>Contact Details</h2>
        <h1>Contact Information</h1>

        <ContactInfoCard />
        <ContactInfoCard />
        <ContactInfoCard />
    </div>
  )
}

export default ContactDetail