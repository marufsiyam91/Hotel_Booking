/* eslint-disable react/prop-types */
import styles from './Choose_card.module.css'

const Choose_card = ({image, title, description}) => {
     console.log(image)
  return (
    <div className={styles.choose_travic_card_container}>
          <span>{image}</span>
          <h3>{title}</h3>
          <p>{description}</p>
    </div>
  )
}

export default Choose_card
