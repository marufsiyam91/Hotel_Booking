import PageTop from '../../Components/PageTop/PageTop'
import styles from './TourList.module.css'

const TourList = () => {
  return (
    <div className={styles.tour_list_container}>
        <PageTop img={'https://azim.hostlin.com/Travic/assets/images/background/page-title-2.jpg'} title={'all tour'} heading={'Tour List'}/>
    </div>
  )
}

export default TourList