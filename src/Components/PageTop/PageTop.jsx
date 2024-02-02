/* eslint-disable react/prop-types */
import styles from './PageTop.module.css'


const PageTop = ({img, title, heading}) => {
  return (
    <div className={styles.pageTop_container}>
        <div className={styles.page_top_back_image}>
            <img src={img} alt="Image" />

            <div className={styles.page_top_content}>
                <h2>{title}</h2>
                <h1>{heading}</h1>
            </div>
        </div>
    </div>
  )
}

export default PageTop