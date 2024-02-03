/* eslint-disable react/prop-types */
import styles from './ContactInfoCard.module.css'

const ContactInfoCard = ({img, title1, title2, heading}) => {
  return (
    <div className={styles.contactinfo_card_container}>
        <div className={styles.contactinfo_card_image}>
          {img}
        </div>
        <h2>{heading}</h2>
        <p>{title1}</p>
        <p>{title2}</p>
    </div>
  )
}

export default ContactInfoCard