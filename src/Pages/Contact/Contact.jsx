import PageTop from '../../Components/PageTop/PageTop'
import styles from './Contact.module.css'


const Contact = () => {
  return (
    <div className={styles.contact_area_container}>
          <PageTop img={'https://azim.hostlin.com/Travic/assets/images/background/page-title-6.jpg'} title={'contact'} heading={'Contact us'}/>
    </div>
  )
}

export default Contact
