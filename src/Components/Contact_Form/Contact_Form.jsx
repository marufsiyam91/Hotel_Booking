import styles from './Contact_Form.module.css'

const Contact_Form = () => {
  return (
    <div className={styles.form_wrapper}>
        <form>
            <div>
            <input type="text" name="name" placeholder="Name"/>
            <input type="email" name="email" placeholder="Email" />
            </div>
            <div>
                <input type="number" name="phone" placeholder="Phone"/>
                <input type="text" name="subject" placeholder="Subject" />
            </div>
            <textarea name="messag" cols="30" rows="10" placeholder="Message"></textarea>
            <button>Send Message</button>
        </form>
    </div>
  )
}

export default Contact_Form