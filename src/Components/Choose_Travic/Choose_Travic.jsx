import Choose_card from '../Choose_card/Choose_card'
import styles from './Choose_Travic.module.css'
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineDynamicFeed } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";

const Choose_Travic = () => {
  return (
    <div className='container'>
          <div className={styles.choose_travic_wrapper}>
               <div className={styles.choose_travic_top_content}>
                    <h4>We are fast</h4>
                    <h2>Why Choose Travic</h2>
               </div>

               <div className={styles.choose_travic_cards_wrapper}>
                    <Choose_card image={<MdOutlinePayments />} title={'Flexible Payment'} description={'We are dedicated to offering the exceptional value for your travel the best investment'}/>
                    <Choose_card image={<MdOutlineDynamicFeed />} title={'No Change Fees'} description={'Your journey with us is about only your relaxation, enjoyment, and more discovery.'}/>
                    <Choose_card image={<GiTakeMyMoney />} title={'Flex Deposit'} description={'Ready to start your next adventure? Contact us today to begin planning your dream'}/>
                    <Choose_card image={<MdOutlineSecurity />} title={'Pay Securely'} description={'Feel free to adapt and customize this text to fit your travel agency with secure Payment'}/>
               </div>
          </div>
    </div>
  )
}

export default Choose_Travic
